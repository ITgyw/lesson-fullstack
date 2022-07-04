import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSingersList } from "@/store/actionCreators"
function Singers(props) {
  const { singersList, getSingersListDispatch } = props
  useEffect(() => {

    getSingersListDispatch()

  }, [])
  console.log("singers:", singersList, '/////');
  return (
    <div>
      Singers
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    singersList: state.singer.singers.singersList
  }

}
//状态改变的流程
//数据状态变得万无一失
const mapDispatchToProps = (dispatch) => {
  return {
    getSingersListDispatch() {
      dispatch(getSingersList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Singers)