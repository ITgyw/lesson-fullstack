import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { Content } from './style'
import Scroll from '@/components/common/Scroll'
import Slider from '@/components/slider/'

function Recommend(props) {
  const { bannerList, songsCount } = props
  const { getBannerDataDispatch } = props
  // let songsCount = 2;
  useEffect(() => {
    console.log('?????????????????')
    getBannerDataDispatch();
  }, [])
  return (
    <Content play={songsCount}>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}></Slider>
        </div>
      </Scroll>
    </Content>
  )
}
// state 状态树
const mapStateToProps = (state) => {
  return {
    bannerList: state.recommend.bannerList,
    songsCount: state.player.playList.length
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)