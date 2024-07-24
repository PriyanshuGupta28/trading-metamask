import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { rootColors } from "../../Utilities/rootColors";

const Footer: React.FC = () => {
    return (
        <Stack
            component="footer"
            sx={{
                boxSizing: "border-box",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem 0",
                flexDirection: "column",
                backgroundColor: rootColors?.secondry,
                mt: 5
            }}
        >
            <Stack
                sx={{
                    padding: "3rem 0",
                    borderTop: "1px solid",
                    borderImage: "linear-gradient(to right, #2022252f, rgba(255, 255, 255, 0.637), #2022252f) 1",
                    width: "80%",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "start",
                    justifyContent: "space-between",
                    gap: { xs: 3, md: 0 }

                }}
            >
                <Stack sx={{ flexDirection: "column", gap: "8px", }}>
                    <Typography sx={{ marginBottom: "10px", }}><b>Home</b></Typography>
                    <Typography >How it works</Typography>
                    <Typography >Gray Fund</Typography>
                    <Typography>Partners</Typography>
                    <Typography>Faq</Typography>
                    <Typography>Contact</Typography>
                </Stack>
                <Stack sx={{ flexDirection: "column", gap: "8px" }}>
                    <Typography sx={{ marginBottom: "10px" }}><b>Metamask</b></Typography>
                    <Typography>About</Typography>
                    <Typography>Report</Typography>
                    <Typography>Join the Fund</Typography>
                </Stack>
                <Stack sx={{ flexDirection: "column", gap: "8px" }}>
                    <Typography sx={{ marginBottom: "10px" }}><b>Legal</b></Typography>
                    <Typography>Terms of Use</Typography>
                    <Typography>Risk Disclosure</Typography>
                    <Typography>Privacy Policy</Typography>
                    <Typography>Code of Ethics</Typography>
                    <Typography>Cybersecurity Policy</Typography>
                    <Typography>AML Policy</Typography>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    padding: "3rem 0",
                    borderTop: "1px solid",
                    borderImage: "linear-gradient(to right, #2022252f, rgba(255, 255, 255, 0.637), #2022252f) 1",
                    width: "80%",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: 'center', md: "end" },
                    justifyContent: "space-between",
                    gap: { xs: 3, md: 0 }
                }}
            >
                <Stack sx={{ flexDirection: "column", alignItems: "start", gap: "2rem" }}>
                    <Typography variant="h4"><b>METAMASK</b></Typography>
                    <Stack sx={{ flexDirection: "row", gap: "2rem" }}>
                        <IconButton><XIcon /></IconButton>
                        <IconButton><TelegramIcon /></IconButton>
                        <IconButton><InstagramIcon /></IconButton>
                        <IconButton><FacebookIcon /></IconButton>
                    </Stack>
                </Stack>
                <Typography>© 2023 Metamask. All rights reserved.</Typography>
                <Stack>
                    <Typography>Terms of Use | Licenses | Privacy Policy</Typography>
                </Stack>
            </Stack>
        </Stack >
    );
};

export default Footer;
