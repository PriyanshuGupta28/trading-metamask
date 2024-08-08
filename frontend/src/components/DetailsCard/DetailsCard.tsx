import { Stack, Typography } from '@mui/material'
import React from 'react'
import { rootColors } from '../../Utilities/rootColors'
import { cardDetailsTypes } from '../../Utilities/types'

const DetailsCard: React.FC<cardDetailsTypes> = ({ fund, investmentType }) => {
    return (
        <Stack sx={{
            justifyContent: 'center',
            alignItems: 'start',
            padding: '2rem 1.5rem',
            gap: 1,
            border: `1px solid ${rootColors?.text}`,
            borderRadius: '0.75rem',
            bgcolor: rootColors?.secondry

        }}>
            <Typography sx={{ whiteSpace: 'nowrap' }}>${fund} USD</Typography>
            <Typography sx={{ whiteSpace: 'nowrap' }}>{investmentType}</Typography>
        </Stack>
    )
}

export default DetailsCard