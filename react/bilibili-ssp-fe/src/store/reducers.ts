import { combineReducers, AnyAction } from "redux"

const initalState = {
    loading: true,
}

const loadingReducer = (state = initalState.loading,
    action: AnyAction) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    loading: loadingReducer
})