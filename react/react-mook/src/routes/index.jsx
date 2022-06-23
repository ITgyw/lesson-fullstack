// 独立配置文件
import { useState, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
const Learn = lazy(() => import('../pages/Learn'))
const Mine = lazy(() => import('../pages/Mine'))
const HomeDetail = lazy(() => import('../pages/HomeDetail'))
const HomeIntroduce = lazy(() => import('../pages/HomeDetail/HomeIntroduce'))
const HomeChat = lazy(() => import('../pages/HomeDetail/HomeChat'))
const HomeQuest = lazy(() => import('../pages/HomeDetail/HomeQuest'))
const HomeFreeMaterial = lazy(() => import('../pages/HomeDetail/HomeFreeMaterial'))

// Routes 不能和react-router-dom一样
const RoutesConfig = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/learn" element={<Learn />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            <Route path="/homedetail" element={<HomeDetail />}>
                <Route path="/homedetail/introduce" element={<HomeIntroduce />} />
                <Route path="/homedetail/chat" element={<HomeChat />} />
                <Route path="/homedetail/quest" element={<HomeQuest />} />
                <Route path="/homedetail/freematerial" element={<HomeFreeMaterial />} />
            </Route>
        </Routes>
    )
}

export default RoutesConfig