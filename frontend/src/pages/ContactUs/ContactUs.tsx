import React from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import contact from '../../assets/contactus.json'
import { rootColors } from '../../Utilities/rootColors'

const ContactUs: React.FC = () => {
    return (
        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4" align="center" gutterBottom
                sx={{ display: { xs: 'flex', md: 'none' }, mt: 5 }}>
                Contact Us
            </Typography>
            <Stack sx={{ width: '90%', mb: 5, mt: 3 }}>
                <Stack sx={{
                    flexDirection: { xs: 'column', md: 'row' }
                }}>
                    <Stack sx={{ width: '100%' }}>
                        <Lottie animationData={contact} />
                    </Stack>
                    <Stack
                        component="form"
                        sx={{
                            width: '100%',

                        }}
                        spacing={3}
                    >
                        <Typography variant="h4" align="center" gutterBottom
                            sx={{ display: { xs: 'none', md: 'unset' } }}>
                            Contact Us
                        </Typography>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={5}
                            fullWidth
                            required
                        />
                        <Button variant="contained" type="submit"
                            fullWidth sx={{ bgcolor: rootColors?.primary, }}>
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ContactUs