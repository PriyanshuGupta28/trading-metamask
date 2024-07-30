import { Stack, Typography } from '@mui/material'
import React from 'react'
import { rootColors } from '../../Utilities/rootColors'
import { cardDetailsTypes } from '../../Utilities/types'

const Card: React.FC<cardDetailsTypes> = ({ fund, type }) => {
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
            <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>${fund}</Typography>
            <Typography>{type}</Typography>
        </Stack>
    )
}

export default Card
