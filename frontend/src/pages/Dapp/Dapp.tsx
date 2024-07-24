import React from 'react'
import { Outlet } from 'react-router-dom'

const Dapp: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Dapp