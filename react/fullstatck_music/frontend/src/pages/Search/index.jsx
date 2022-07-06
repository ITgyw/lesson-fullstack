import React, {
    useState,
    useRef, useEffect, useCallback
} from 'react'
import { connect } from 'react-redux';

// useRef  DOM 相关的
// useCallback 性能优化

const Search = (props) => {
    // query 搜索内容 reduc是解决共享状态问题的
    // 1. 搜索列表 api  action  redux
    const [query, setQuery] = useState('')
}
const mapStateToProps = (state) => {
    return {
        // api 热搜
        hotList: state.search.hotList,
        enterLoading: state.search.enterLoading,
        // 搜索建议 卖广告
        suggestList: state.search.suggestList,
        // redux就为跨模块数据共享而来，把数据共享好
        songsCount: state.player.playList.length,
        songsList: state.search.songsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // getHotKeyWordsDispatch() {
        //     dispatch(getHotKeyWords());
        // },
        // changeEnterLoadingDispatch() {
        //     dispatch(changeEnterLoading(data))
        // },
        // getSuggestListDispatch(data) {
        //     dispatch(getSuggestList(data))
        // },
        // getSongsLiatDispatch() {
        //     dispatch()
        // }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)