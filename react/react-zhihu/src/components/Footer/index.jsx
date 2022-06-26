import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer(props) {
    const { pathname } = useLocation()
    return (
        <FooterWrapper>
            <Link to="/home" className={classnames({ active: pathname == '/home' || pathname == '/' })}>
                <i className="fa fa-home"></i>
                <span>首页</span>
            </Link>
            <Link to="/learn" className={classnames({ active: pathname == '/learn' })}>
                <i className="fa fa-youtube-play"></i>
                <span>学习</span>
            </Link>
            <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
                <i className="fa fa-user"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
