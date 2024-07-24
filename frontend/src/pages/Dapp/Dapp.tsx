import React from "react";
import { Stack } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PaymentIcon from "@mui/icons-material/Payment";
import TuneIcon from "@mui/icons-material/Tune";
import SensorsIcon from "@mui/icons-material/Sensors";
import { Link, useLocation } from "react-router-dom";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CampaignIcon from "@mui/icons-material/Campaign";
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
                            <Stack sx={{ fontSize: "16px", fontWeight: 400 }}>
                                {item?.title}
                            </Stack>
                        </Stack>
                    </Link>
                ))}
            </Stack>
            <Stack sx={{ height: "700vh", ml: "300px", padding: "10px 20px" }}>
                <Outlet />
            </Stack>
        </Stack>
    )
}

export default Dapp;

const navLinks = [
    {
        title: "Assistants",
        path: "/assistants",
        icon: (
            <AccountBoxIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Phone Numbers",
        path: "/phonenumbers",
        icon: (
            <PhoneIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Contact Lists",
        path: "/contactlist",
        icon: (
            <ChecklistIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Call Logs",
        path: "/calllogs",
        icon: (
            <PhoneCallbackIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Billing",
        path: "/billing",
        icon: (
            <PaymentIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Campaigns",
        path: "/campaigns",
        icon: (
            <CampaignIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Integrations",
        path: "/integrations/ghl",
        icon: (
            <SensorsIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
    {
        title: "Accounts",
        path: "/accounts",
        icon: (
            <TuneIcon
                sx={{
                    width: "23.33px",
                    height: "23.33px",
                    color: "white",
                }}
            />
        ),
    },
];