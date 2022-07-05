// 独立配置文件
import { useState, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
// const Learn = lazy(() => import('../pages/Learn'))
// const Mine = lazy(() => import('../pages/Mine'))
const HomeRecommend = lazy(() => import('../pages/Home/HomeRecommend'))
// const HomeMicroclass = lazy(() => import('../pages/Home/HomeMicroclass'))
// const HomeEnd = lazy(() => import('../pages/Home/HomeEnd'))
// const HomeAudioclass = lazy(() => import('../pages/Home/HomeAudioclass'))
// const HomeBoutiquet = lazy(() => import('../pages/Home/HomeBoutiquet'))
// const HomeEnglish = lazy(() => import('../pages/Home/HomeEnglish'))

// const HomeDetail = lazy(() => import('../pages/HomeDetail'))
// const HomeIntroduce = lazy(() => import('../pages/HomeDetail/HomeIntroduce'))
// const HomeChat = lazy(() => import('../pages/HomeDetail/HomeChat'))
// const HomeQuiz = lazy(() => import('../pages/HomeDetail/HomeQuiz'))

// const HomeFreeMaterial = lazy(() => import('../pages/HomeDetail/HomeFreeMaterial'))

// Routes 不能和react-router-dom一样
const RoutesConfig = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}>
                <Route path="/home/recommend" element={<HomeRecommend />} />
                {/* <Route path="/home/microclass" element={<HomeMicroclass />} />
                <Route path="/home/end" element={<HomeEnd />} />
                <Route path="/home/audioclass" element={<HomeAudioclass />} />
                <Route path="/home/boutiquet" element={<HomeBoutiquet />} />
                <Route path="/home/english" element={<HomeEnglish />} /> */}
            </Route>
            {/* <Route path="/learn" element={<Learn />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            <Route path="/homedetail" element={<HomeDetail />}>
                <Route path="/homedetail/introduce" element={<HomeIntroduce />} />
                <Route path="/homedetail/chat" element={<HomeChat />} />
                <Route path="/homedetail/quiz" element={<HomeQuiz />} />
            </Route> */}
        </Routes>
    )
}

export default RoutesConfig