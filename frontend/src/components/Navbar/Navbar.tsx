import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { rootColors } from "../../Utilities/rootColors";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navLinksMob.map((text, index) => (
          <Link
            to={text?.path}
            style={{
              textDecoration: "none",
              color: rootColors?.text,
            }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text?.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Connect"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Stack
      component={"nav"}
      sx={{
        background: "rgba(21, 26, 32, 0.1)",
        backdropFilter: "blur(10px)",
        boxSizing: "border-box",
        zIndex: 1000,
        position: "sticky",
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "10px 20px", md: "1rem 2rem" },
        borderBottom: `1px solid ${rootColors?.textSecondry}`,
      }}
    >
      <Stack component={Typography}>MetaMask</Stack>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 5,
          display: { xs: "none", md: "flex" },
        }}
      >
        {navLinks?.map((item, index) => (
          <Typography
            key={index}
            component={Link}
            to={item?.path}
            sx={{
              textDecoration: "none",
              color: rootColors?.text,
            }}
          >
            {item?.title}
          </Typography>
        ))}
      </Stack>
      <Stack sx={{ display: { xs: "none", md: "flex" } }}>Login</Stack>
      <Stack
        sx={{ display: { xs: "flex", md: "none" } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ fontSize: 40 }} />
      </Stack>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "rgba(21, 26, 32, 0.1)",
            backdropFilter: "Blur(30px)",
            color: rootColors.text,
            borderRadius: "1rem",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Stack>
  );
};

export default Navbar;

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Fund",
    path: "/dapp/deposit",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "News",
    path: "/news",
  },
];
const navLinksMob = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Deposit",
    path: "/dapp/deposit",
  },
  {
    title: "Withdraw",
    path: "/dapp/withdraw",
  },
  {
    title: "Transactions",
    path: "/dapp/transactions",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "News",
    path: "/news",
  },
];
