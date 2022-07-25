import React from 'react'
import { connect } from 'react-redux'
function Home() {
    return (
        <div>
            Home
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    hotword: state.search.hotword
})
export default connect(mapStateToProps)(Home)
