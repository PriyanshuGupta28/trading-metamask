import { createTheme, Stack, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ContactlessIcon from "@mui/icons-material/Contactless";
import { rootColors } from "./Utilities/rootColors";
import { Link, useLocation } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const location = useLocation();
  return (
    <div
      style={{
        background: rootColors?.bgColor,
        color: rootColors?.text,
        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Stack sx={{ flexDirection: "row" }}>
          <Stack
            sx={{
              boxSizing: "border-box",
              width: "300px",
              position: "fixed",
              justifyContent: "space-between",
              top: 0,
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
            <Stack sx={{ gap: 3 }}>
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
            <Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: "16px",
                  borderRadius: "8px",
                  alignItems: "center",
                  bgcolor: "gray",
                  cursor: "pointer",
                  backgroundColor: rootColors?.primary,
                }}
              >
                <Stack
                  sx={{
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                >
                  <ContactlessIcon />
                </Stack>
                <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                  Connect Wallet
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              flex: 1,
              marginLeft: { xs: 0, md: "300px" },
              overflowY: "auto",
              mt: 3,
            }}
          >
            <AllRoutes />
          </Stack>
        </Stack>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;

const navLinks = [
  {
    title: "Dashboard",
    path: "/",
    icon: (
      <Dashboard
        sx={{
          width: "23.33px",
          height: "23.33px",
          color: "white",
        }}
      />
    ),
  },
  {
    title: "Deposit",
    path: "/deposit",
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
    path: "/withdraw",
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
    path: "/transactions",
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
