import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { Content } from './style'
import Scroll from '@/components/common/Scroll'
import Slider from '@/components/slider/'

function Recommend(props) {
  const { bannerList, songsCount, recommendList } = props
  const { getBannerDataDispatch } = props
  const { getRecommendListDataDispatch } = props
  // let songsCount = 2;
  useEffect(() => {
    console.log('?????????????????')
    getBannerDataDispatch();
    getRecommendListDataDispatch();
  }, [])
  return (
    <Content play={songsCount}>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}></Slider>
          {/* <RecommendList recommendList = {recommendList}/> */}
        </div>
      </Scroll>
    </Content>
  )
}
// state 状态树
const mapStateToProps = (state) => {
  return {
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
    songsCount: state.player.playList.length
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionCreators.getRecommendList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)