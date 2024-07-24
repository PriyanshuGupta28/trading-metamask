import React from 'react'
import { Stack, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import x from '../../assets/x.json'
import discord from '../../assets/discord.json'
import insta from '../../assets/insta.json'
import facebook from '../../assets/facebook.json'

const SocialMedia: React.FC = () => {
    return (
        <Stack>
            <Typography variant='h4'
                sx={{
                    textAlign: 'center',
                    fontWeight: 700,
                    mb: 8,
                    mt: 8
                }}>
                We are on social medial platforms
            </Typography>
            <Stack
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 5,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Stack sx={{ width: '10rem' }}>
                    <Lottie animationData={x} />
                </Stack>
                <Stack sx={{ width: '10rem' }}>
                    <Lottie animationData={discord} />
                </Stack >
                <Stack sx={{ width: '10rem' }}>
                    <Lottie animationData={insta} />
                </Stack >
                <Stack sx={{ width: '10rem' }}>
                    <Lottie animationData={facebook} />
                </Stack>

            </Stack>
        </Stack>
    )
}

export default SocialMedia