import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { rootColors } from '../../Utilities/rootColors';

const Navbar: React.FC = () => {
    return (
        <Stack component={'nav'}
            sx={{
                background: 'rgba(21, 26, 32, 0.1)',
                backdropFilter: "blur(10px)",
                boxSizing: 'border-box',
                zIndex: 1000,
                position: 'sticky',
                top: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: { xs: '10px 20px', md: '1rem 2rem' },
                borderBottom: `1px solid ${rootColors?.textSecondry}`,
                // borderImage: `linear-gradient(to right, #2022252f,${rootColors?.textSecondry} , #2022252f) 1`
            }}
        >
            <Stack component={Typography}>MetaMask</Stack>
            <Stack sx={{ flexDirection: 'row', gap: 5, display: { xs: 'none', md: 'flex' } }}>
                {navLinks?.map((item, index) => (
                    <Typography key={index} component={Link} to={item?.path} sx={{
                        textDecoration: 'none',
                        color: rootColors?.text
                    }}>
                        {item?.title}
                    </Typography>
                ))}
            </Stack>
            <Stack sx={{ display: { xs: 'none', md: 'flex' } }}>Login</Stack>
            <Stack sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MenuIcon sx={{ fontSize: 40 }} />
            </Stack>
        </Stack >
    )
}

export default Navbar

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Fund',
        path: '/dapp/fund'
    },
    {
        title: 'About Us',
        path: '/about-us'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'News',
        path: '/news'
    },

]

