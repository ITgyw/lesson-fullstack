import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import Banners from './Banners'

function HomeRecommend(props) {
    const [bannerList] = props
    const [getBnnerDataDispatch] = props
    useEffect(() => {
        console.log("||||||||")
        getBnnerDataDispatch();
    }, [])
    return (
        <Wrapper>
            <Banners bannerList={bannerList} />
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        bannerList: state.HomeRecommend.bannerList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionCreators.getBannerList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeRecommend)