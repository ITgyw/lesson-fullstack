import React, { useEffect } from 'react'
import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Swiper from 'swiper'
import { Wrapper } from './style'
import '@/assets/font/iconfont.css'


export default function HomeNav({ id }) {
    let swiper = null
    useEffect(() => {
        if (swiper) return
        swiper = new Swiper('.navbar')
    }, [])
    // 页面二级路由的导航的准备
    let homeNavs = [
        { id: 1, desc: '推荐', path: '/recommend' },
        { id: 2, desc: '精选微课', path: '/microclass' },
        { id: 3, desc: '期末突击课', path: '/end' },
        { id: 4, desc: '有声课堂', path: '/audioclass' },
        { id: 5, desc: '国家精品', path: '/boutiquet' },
        { id: 6, desc: '大学英语', path: '/english' },
    ]
    return (
        <Wrapper>
            <div className="header_search">
                <i className='iconfont icon-saoma'>|</i>
                <input type="text" placeholder='期末突击课' />
                <i className="fa fa-bell-o"></i>
            </div>
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                    {
                        homeNavs.map((item, index) => {
                            return (
                                <NavLink
                                    index={index}
                                    to={`/home${item.path}`}
                                    key={item.id}

                                    className="nav-item swiper-slide"
                                >
                                    {item.desc}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            <i className='iconfont icon-gengduo'></i>
        </Wrapper>
    )
}

HomeNav.propTyes = {
    id: propTyes.string.isRequired
}