import React, { useEffect } from 'react'
import { BannersWrapper } from './style'
import propTypes from 'prop-types'
import Swiper from 'swiper'
import { Link } from 'react-router-dom'

export default function SmallBanners({ smallbanners }) {
    let swiper = null;
    useEffect(() => {
        if (swiper) {
            return
        }
        swiper = new Swiper('.btn-banners', {
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }, [])

    const renderBtnBannersPage1 = () => {
        let items = smallbanners.slice(0, 1);
        // console.log(items)
        return items.map(item => {
            return (
                <Link
                    to="/eleme/all"
                    className="swiper-item"
                    key={item.id}
                >
                    <div>
                        <p>
                            <img src={item.img} />
                        </p>
                    </div>
                </Link>
            )
        })
    }

    return (
        <BannersWrapper>
            <div className="btn-banners swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {renderBtnBannersPage1()}
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </BannersWrapper>
    )
}
