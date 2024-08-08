import { Stack, Typography } from '@mui/material'
import React from 'react'
import { rootColors } from '../../Utilities/rootColors'
import { cardDetailsTypes } from '../../Utilities/types'

const Card: React.FC<cardDetailsTypes> = ({ fund, investmentType }) => {
    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                gap: 1,
                border: `1px solid ${rootColors?.textSecondry}`,
                borderRadius: '0.75rem'

            }}>
            <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
                {investmentType === "Active Users" || investmentType === "Average monthly yield" ? null : "$"} {fund}
            </Typography>
            <Typography>{investmentType}</Typography>
        </Stack>
    )
}

export default Card
