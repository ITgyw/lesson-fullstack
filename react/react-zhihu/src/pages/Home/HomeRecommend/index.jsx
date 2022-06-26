import React, { useEffect, useState } from 'react'
import Banners from './Banners'
import { getBanners } from '@/api/request'


// const backgroungImg = "@/assets/imgs/1.png"
export default function HomeRecommend() {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        (async () => {
            let { data: bannerData } = await getBanners()
            setBanners(bannerData)
        })()
    }, [])
    return (
        <div>
            HomeRecommend
            {/* <img src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="1" /> */}
            <Banners banners={banners} />
        </div>
    )
}
