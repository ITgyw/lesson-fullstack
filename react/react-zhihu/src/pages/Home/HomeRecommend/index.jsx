import React, { useEffect, useState } from 'react'
import Banners from './Banners'
import Test from './Test'
// import SmallBanners from './SmallBanners'
import { getTest, getBanners } from '@/api/request'
import { Wrapper } from './style'


// const backgroungImg = "@/assets/imgs/1.png"
export default function HomeRecommend() {
    const [banners, setBanners] = useState([])
    // const [smallbanners, setSmallbanners] = useState([])
    const [test, setTest] = useState([])
    useEffect(() => {
        (async () => {
            let { data: bannerData } = await getBanners()
            // let { data: smallbannerData } = await getSmallBanners()
            let { data: testData } = await getTest()
            setBanners(bannerData)
            // setSmallbanners(smallbannerData)
            setTest(testData)
        })()
    }, [])
    return (
        <Wrapper>
            HomeRecommend
            <div className='box-img'>
                {/* <img src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/c2c3a06bb1466517b25853a458a799ff.jpg" alt="1" /> */}
            </div>
            <Test test={test} />
            <Banners banners={banners} />
            {/* <SmallBanners smallbanners={smallbanners} /> */}
        </Wrapper>
    )
}
