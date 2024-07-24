import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import AboutUs from '../../pages/AboutUs/AboutUs'
import ContactUs from '../../pages/ContactUs/ContactUs'
import News from '../../pages/News/News'
import Dapp from '../../pages/Dapp/Dapp'
import Fund from '../../pages/Fund/Fund'
import Error404 from '../Error404/Error404'

const AllRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/news' element={<News />} />
            <Route path='/dapp' element={<Dapp />} >
                <Route path='fund' element={<Fund />} />
            </Route>
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default AllRoutes