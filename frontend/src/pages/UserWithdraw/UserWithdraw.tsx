import React from 'react'
import { Grid, Stack } from '@mui/material'
import { UserWithdrawCardData } from '../../Utilities/utilitiesData'
import DetailsCard from '../../components/DetailsCard/DetailsCard'

const UserWithdraw: React.FC = () => {
    return (
        <Stack sx={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Stack sx={{ width: '95%', gap: { xs: 5, md: 3 } }}>
                <Grid container spacing={2}>
                    {UserWithdrawCardData?.map((item, index) => (
                        <Grid item xs={12} md={3}>
                            <DetailsCard key={index} fund={item?.fund} type={item?.type} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Stack>
    )
}

export default UserWithdraw