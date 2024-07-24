import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { rootColors } from '../../Utilities/rootColors';

const AboutUs: React.FC = () => {
    const services = [
        {
            icon: <CodeIcon fontSize="large" />,
            title: 'Development',
            description: 'Building cutting-edge blockchain solutions.'
        },
        {
            icon: <SecurityIcon fontSize="large" />,
            title: 'Security',
            description: 'Ensuring the highest security standards.'
        },
        {
            icon: <SupportAgentIcon fontSize="large" />,
            title: 'Support',
            description: '24/7 support for all our users.'
        }
    ];
    return (
        <Container sx={{ py: 5 }}>
            <Box
                sx={{
                    opacity: 0,
                    animation: 'fadeIn 1s forwards',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 }
                    }
                }}
            >
                <Typography variant="h2" align="center" gutterBottom>
                    About Us
                </Typography>
            </Box>
            <Box
                sx={{
                    opacity: 0,
                    transform: 'translateY(50px)',
                    animation: 'slideIn 1s forwards 0.5s',
                    '@keyframes slideIn': {
                        from: { opacity: 0, transform: 'translateY(50px)' },
                        to: { opacity: 1, transform: 'translateY(0)' }
                    }
                }}
            >
                <Typography variant="h6" align="center" paragraph>
                    Welcome to MetaMask Investment Platform, your gateway to the decentralized investment world. We are dedicated to providing the best blockchain solutions with a focus on security, innovation, and user experience.
                </Typography>
            </Box>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {services.map((service, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Box
                            sx={{
                                backgroundColor: rootColors?.textSecondry,
                                borderRadius: '10px',
                                padding: { xs: '1rem', md: '2rem' },
                                textAlign: 'center',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
                                }
                            }}
                        >
                            <IconButton>{service.icon}</IconButton>
                            <Typography variant="h5" sx={{ mt: 2 }}>
                                {service.title}
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    mt: 1,
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap'
                                }}>
                                {service.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default AboutUs