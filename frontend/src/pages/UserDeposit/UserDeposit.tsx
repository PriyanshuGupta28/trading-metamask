import React from 'react'
import { Grid, Stack } from '@mui/material'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import { UserDepositCardData } from '../../Utilities/utilitiesData'

const UserDeposit: React.FC = () => {
    return (
        <Stack sx={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Stack sx={{ width: '95%', gap: { xs: 5, md: 3 } }}>
                <Grid container spacing={2}>
                    {UserDepositCardData?.map((item, index) => (
                        <Grid item xs={12} md={3}>
                            <DetailsCard key={index} fund={item?.fund} type={item?.type} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Stack>
    )
}

export default UserDeposit;