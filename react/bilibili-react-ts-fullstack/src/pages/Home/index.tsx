import React from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'
function Home() {
    return (
        <div>
            Home
        </div>
    )
}


const mapStateToProps = (state: rootState) => ({
    hotword: state.search.hotword
})
export default connect(mapStateToProps)(Home)
