import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { UserDepositCardData } from "../../Utilities/utilitiesData";

interface SummaryData {
  totalUsers: number;
  totalBalance: number;
  totalDeposits: number;
  totalWithdrawals: number;
}

interface Transaction {
  id: string;
  user: string;
  type: "deposit" | "withdrawal";
  amount: number;
  date: string;
  status: "pending" | "completed";
}

const Dashboard: React.FC = () => {
  const [summary, setSummary] = useState<SummaryData>({
    totalUsers: 0,
    totalBalance: 0,
    totalDeposits: 0,
    totalWithdrawals: 0,
  });
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      setSummary({
        totalUsers: 120,
        totalBalance: 100000,
        totalDeposits: 50000,
        totalWithdrawals: 30000,
      });

      setRecentTransactions([
        {
          id: "1",
          user: "John Doe",
          type: "deposit",
          amount: 1500,
          date: "2024-10-27",
          status: "completed",
        },
        {
          id: "2",
          user: "Jane Smith",
          type: "withdrawal",
          amount: 1000,
          date: "2024-10-26",
          status: "pending",
        },
        {
          id: "3",
          user: "Alice Johnson",
          type: "deposit",
          amount: 2000,
          date: "2024-10-25",
          status: "completed",
        },
        {
          id: "4",
          user: "Bob Brown",
          type: "withdrawal",
          amount: 750,
          date: "2024-10-24",
          status: "completed",
        },
      ]);
    };

    fetchData();
  }, []);

  // Data for the bar chart
  const barChartData = [
    { month: "January", deposits: 1200, withdrawals: 800 },
    { month: "February", deposits: 1900, withdrawals: 1400 },
    { month: "March", deposits: 3000, withdrawals: 2200 },
    { month: "April", deposits: 5000, withdrawals: 2500 },
    { month: "May", deposits: 2000, withdrawals: 1800 },
    { month: "June", deposits: 3000, withdrawals: 2400 },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        {UserDepositCardData?.map((userDepositCardData) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {userDepositCardData?.investmentType}
                </Typography>
                <Typography variant="h4">
                  {userDepositCardData?.fund}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Balance</Typography>
              <Typography variant="h4">
                ${summary.totalBalance.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Deposits</Typography>
              <Typography variant="h4">
                ${summary.totalDeposits.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Withdrawals</Typography>
              <Typography variant="h4">
                ${summary.totalWithdrawals.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>

      {/* Chart Section */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Monthly Deposits & Withdrawals
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="deposits" fill="#42A5F5" name="Deposits" />
            <Bar dataKey="withdrawals" fill="#66BB6A" name="Withdrawals" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Recent Transactions */}
      <TableContainer component={Paper}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Recent Transactions
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>User</strong>
              </TableCell>
              <TableCell>
                <strong>Type</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Amount</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.user}</TableCell>
                <TableCell>
                  {transaction.type.charAt(0).toUpperCase() +
                    transaction.type.slice(1)}
                </TableCell>
                <TableCell align="right">
                  ${transaction.amount.toLocaleString()}
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  {transaction.status.charAt(0).toUpperCase() +
                    transaction.status.slice(1)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
