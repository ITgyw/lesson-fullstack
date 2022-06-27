import React, { useEffect, useState } from 'react'
import Banners from './Banners'
import SmallBanners from './SmallBanners'
import { getBanners, getSmallBanners } from '@/api/request'
import { Wrapper } from './style'


// const backgroungImg = "@/assets/imgs/1.png"
export default function HomeRecommend() {
    const [banners, setBanners] = useState([])
    const [smallbanners, setSmallbanners] = useState([])
    useEffect(() => {
        (async () => {
            let { data: bannerData } = await getBanners()
            let { data: smallbannerData } = await getSmallBanners()
            setBanners(bannerData)
            setSmallbanners(smallbannerData)
        })()
    }, [])
    return (
        <Wrapper>
            HomeRecommend
            <div className='box-img'>
                <img src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/c2c3a06bb1466517b25853a458a799ff.jpg" alt="1" />
            </div>
            <Banners banners={banners} />
            <SmallBanners smallbanners={smallbanners} />
        </Wrapper>
    )
}
