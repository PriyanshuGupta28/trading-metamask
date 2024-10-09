import React from 'react'
import { Stack } from '@mui/material'
import UserTransactionsTable from '../../components/UserTransactionsTable/UserTransactionsTable'

const UserTransactions: React.FC = () => {
    return (
        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Stack width={'90%'}>
                <UserTransactionsTable />
            </Stack>
        </Stack>
    )
}

export default UserTransactions;