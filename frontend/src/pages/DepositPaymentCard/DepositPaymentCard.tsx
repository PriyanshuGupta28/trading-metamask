import React from 'react'
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { rootColors } from '../../Utilities/rootColors';
import usdt from '../../assets/usdt.png'

const DepositPaymentCard: React.FC = () => {
    return (
        <Stack
            sx={{
                bgcolor: rootColors?.secondry,
                padding: '1rem',
                gap: 2,
                border: `1px solid ${rootColors?.text}`,
                borderRadius: '0.75rem'
            }}>
            <Typography sx={{
                display: 'flex',
                fontWeight: 700,
                fontSize: '20px',
                alignItems: 'center',
                gap: 1
            }}>
                <IconButton>
                    <img src={usdt}
                        style={{ width: '30px', height: '30px' }} />
                </IconButton>
                USDT

            </Typography>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Amount</Typography>
                <Typography>0.00 available</Typography>
            </Stack>
            <Stack>
                <TextField variant='standard' placeholder='0.00' />
            </Stack>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', }}>
                <IconButton>
                    <AccountBalanceWalletIcon />
                </IconButton>
                <Typography>Wallet</Typography>
            </Stack>
            <Stack>
                <Button
                    variant='contained'
                    sx={{
                        bgcolor: rootColors?.textSecondry,
                        color: rootColors?.text,
                        ":hover": {
                            bgcolor: rootColors?.bgColor
                        }
                    }}>
                    Crypto Deposit
                </Button>
            </Stack>
        </Stack>
    )
}

export default DepositPaymentCard