import { Stack, Typography } from '@mui/material'
import React from 'react'
import { rootColors } from '../../Utilities/rootColors'

const Card: React.FC = () => {
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
            <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>$53,642,630.05</Typography>
            <Typography>Assets Under Management</Typography>
        </Stack>
    )
}

export default Card