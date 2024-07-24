import React from 'react'
import Lottie from 'lottie-react'
import error404 from '../../assets/404.json'

const Error404: React.FC = () => {
    return (
        <div>
            <Lottie animationData={error404} />
        </div>
    )
}

export default Error404