import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { rootColors } from '../../Utilities/rootColors'
import laptop from '../../assets/laptop.json'
import key from '../../assets/key.json'
import Lottie from 'lottie-react'
import Faq from '../../components/Faq/Faq'
import Card from '../../components/Card/Card'
import SocialMedia from '../../components/SocialMedia/SocialMedia'

const Home: React.FC = () => {
    return (
        <Stack sx={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Stack sx={{ width: '90%', gap: { xs: 5, md: 3 } }}>
                <HeroSection />
                <Stack
                    sx={{
                        flexDirection: { xs: "column", md: 'row' },
                        justifyContent: 'space-between',
                        gap: { xs: 3, md: 0 }
                    }}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Stack>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        mt: 5
                    }}>
                    <Typography
                        variant='h4'
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700
                        }}>
                        Get Started Today
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            maxWidth: { xs: '100%', md: "500px" }
                        }}
                    >
                        Here are a few of our products and services to be leveraged by each user that chooses Gray Digital.
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                        justifyContent: { xs: 'center', md: 'normal' }, alignItems: 'center',
                        textAlign: 'left',

                    }}>
                    <Stack sx={{
                        width: "100%",
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        <Typography variant='h5'
                            sx={{ fontWeight: 700 }}>
                            Gray Fund
                        </Typography>
                        <Typography
                            variant='subtitle1' >The Gray Fund offers a unique opportunity to benefit from a diverse investment strategy that blends TradFi and DeFi. By investing in The Fund, users can earn passive income while benefiting from professional management and risk mitigation measures.
                        </Typography>
                        <Link to={'/dapp/fund'}
                            style={{
                                textDecoration: 'none',
                                color: rootColors?.text
                            }}>
                            Learn more
                        </Link>
                    </Stack>
                    <Stack sx={{ width: "50%", }}>
                        <Lottie animationData={laptop} />
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: { xs: 'center', md: 'normal' }, alignItems: 'center',
                        textAlign: 'left',
                        gap: 10

                    }}>
                    <Stack sx={{ width: "50%" }}>
                        <Lottie animationData={key} />
                    </Stack>
                    <Stack
                        sx={{
                            width: "100%",
                            justifyContent: 'center',
                            gap: 2
                        }}>

                        <Typography
                            variant='h5'
                            sx={{ fontWeight: 700 }}>
                            Trading Services
                        </Typography>

                        <Typography
                            variant='subtitle1'
                            sx={{
                                maxWidth: { xs: '100%', md: "90%" }
                            }}>
                            Gray Digital Trading Services offer access to proprietary trading algorithms, bots, charts, technical analysis, and more.
                        </Typography>

                        <Link to={'/dapp/fund'}
                            style={{
                                textDecoration: 'none',
                                color: rootColors?.text
                            }}>
                            Learn more
                        </Link>
                    </Stack>

                </Stack>
                <SocialMedia />
                <Faq />
            </Stack>
        </Stack>
    )
}

export default Home