import React, { useEffect, useState, memo } from 'react'
import { SliderContainer } from './style'
import Swiper from 'swiper'

function Slider({ bannerList }) {
    const [sliderSwiper, setSliderSwiper] = useState(null)
    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let sliderSwiper = new Swiper(".slider-container", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOninteraction: false
                },
                paginatio: { el: '.swiper-pagination' }
            })
            setSliderSwiper(sliderSwiper)
        }
    }, [bannerList.length, sliderSwiper])
    return (
        <SliderContainer>
            <div className="before"></div>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        // 最好不用index 做key
                        bannerList.map(slide => {
                            return (
                                <div className="swiper-slide"
                                    key={slide.imageUrl}>
                                    <div className="slider-nav">
                                        <img src={slide.imageUrl}
                                            width="100%"
                                            height="100%"
                                            alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </SliderContainer>
    )
}

export default memo(Slider)