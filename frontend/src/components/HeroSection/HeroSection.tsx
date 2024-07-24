import React from 'react'
import { Stack, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import globe from '../../assets/globe.json'
import { rootColors } from '../../Utilities/rootColors'

const HeroSection: React.FC = () => {
    return (
        <Stack
            sx={{
                flexDirection: { xs: 'column-reverse', md: 'row' },
                justifyContent: { xs: "center", md: 'space-between' }
            }}>
            <Stack
                sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'start' },
                    gap: 3,
                    textAlign: { xs: "center", md: 'left' }
                }}>
                <Typography
                    variant='h3'
                    sx={{ fontWeight: 700 }}>
                    Investing, redefined
                </Typography>
                <Typography variant='body1'>
                    Institutional quality investments and services, for everyone.
                </Typography>

                <Stack component={Typography} sx={{
                    cursor: "pointer",
                    width: '9rem',
                    padding: '8px 16px',
                    borderRadius: '16px',
                    bgcolor: rootColors?.primary,

                }}>

                    Create an account
                </Stack>
            </Stack>
            <Stack sx={{ width: '100%' }}>
                <Lottie animationData={globe} color='white' />
            </Stack>
        </Stack>
    )
}

export default HeroSection