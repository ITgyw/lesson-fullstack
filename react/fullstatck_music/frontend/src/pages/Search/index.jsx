import React, {
    useState,
    useEffect, useRef, useCallback
} from 'react';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
//  useRef  DOM 相关
//  useCallback 性能优化 
import {
    changeEnterLoading,
    getHotKeywords
} from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import {
    Container
} from './style'
import SearchBox from '@/components/common/search-box'
import Loading from '@/components/common/loading'
import { EnterLoading } from './../Singers/style'

const Search = (props) => {
    const navigate = useNavigate()
    const { hotList, songsCount, enterLoading } = props
    const {
        getHotKeywordsDispatch,
        changeEnterLoadingDispatch
    } = props

    // 搜索内容 redux 解决共享状态问题 
    // 1. 搜索列表 api  action  redux 
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)

    const searchBack = useCallback(() => {
        setShow(false);
    }, [])
    useEffect(() => {
        setShow(true)
        if (!hotList.length) {
            getHotKeywordsDispatch()
        }
    }, [])

    const handleQuery = (q) => {
        // console.log(q);
        setQuery(q)
    }

    useEffect(() => {
        // console.log(query, '----------------');
        if (query.trim()) {
            //  有必要去请求
            changeEnterLoadingDispatch(true);
        }
    }, [query])

    return (
        // 当dom ready 组件挂载上去后，应用css transition效果
        <CSSTransition
            in={show}
            timeout={300}
            appear={true}
            classNames="fly"
            unmountOnExit
            onExit={() => {
                navigate(-1)
            }}
        >
            <Container play={songsCount}>
                <div className="serach_box_wrapper">
                    <div className="search_box_wrapper">
                        <SearchBox
                            back={searchBack}
                            // 双向绑定  交给父组件
                            newQuery={query}
                            handleQuery={handleQuery}
                        >

                        </SearchBox>
                    </div>
                </div>
                {enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
            </Container>
        </CSSTransition>
    )
}
const mapStateToProps = (state) => {
    return {
        // api 热搜
        hotList: state.search.hotList,
        enterLoading: state.search.enterLoading,
        // 搜索建议 卖广告
        suggestList: state.search.suggestList,
        // 就为跨模块共享数据而来， 共享好 
        songsCount: state.player.playList.length,
        songsList: state.search.songsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHotKeywordsDispatch() {
            dispatch(getHotKeywords());
        },
        changeEnterLoadingDispatch(data) {
            dispatch(changeEnterLoading(data))
        },
        // getSuggestListDispatch(data) {
        //     dispatch(getSuggestList(data))
        // }
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(React.memo(Search))