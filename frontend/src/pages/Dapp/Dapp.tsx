import React from "react";
import { Stack, Typography } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import { rootColors } from "../../Utilities/rootColors";

const Dapp: React.FC = () => {
    const location = useLocation();
    return (
        <Stack sx={{ flexDirection: 'row', }}>
            <Stack
                sx={{
                    boxSizing: "border-box",
                    width: "300px",
                    position: "fixed",
                    top: "56.5px",
                    left: 0,
                    bottom: 0,
                    flex: "0 0 auto",
                    bgcolor: rootColors?.bgColor,
                    borderRight: `1px solid ${rootColors?.textSecondry}`,
                    padding: "44px 32px",
                    gap: 3,
                    zIndex: 10,
                    display: { xs: "none", md: "flex" },
                }}
            >
                {navLinks?.map((item, index) => (
                    <Link
                        key={index}
                        to={item?.path}
                        style={{ textDecoration: "none", color: rootColors?.text }}
                    >
                        <Stack
                            sx={{
                                flexDirection: "row",
                                gap: "16px",
                                alignItems: "center",
                            }}
                        >
                            <Stack
                                sx={{
                                    bgcolor:
                                        location?.pathname === item?.path
                                            ? rootColors?.primary
                                            : null,
                                    borderRadius: "8px",
                                    padding: "8px",
                                }}
                            >
                                {item?.icon}
                            </Stack>
                            <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                                {item?.title}
                            </Typography>
                        </Stack>
                    </Link>
                ))}
            </Stack>
            <Stack sx={{
                flex: 1,
                marginLeft: { xs: 0, md: "300px" },
                overflowY: "auto",
                mt: 3,
            }}>
                <Outlet />
            </Stack>
        </Stack>
    )
}

export default Dapp;

const navLinks = [
    {
        title: "Deposit",
        path: "/dapp/deposit",
        icon: (
            <AccountBalanceIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Withdraw",
        path: "/dapp/withdraw",
        icon: (
            <CurrencyRupeeIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Transactions",
        path: "/dapp/transactions",
        icon: (
            <CreditCardIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },

];