// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// // import { getSingerList } from '@/store/actionCreators'

// function Singers(props) {
//   const { singerList, getSingerListDispatch } = props
//   useEffect(() => {
//     getSingerListDispatch()
//   }, [])
//   console.log(singerList, '////')
//   return (
//     <div>
//       Singer
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     singer: state.singer.singerList
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSingerListDispatch() {
//       dispatch(getSingerList())
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Singers)    