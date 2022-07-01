const defaultState = {
    singerList: [
    ]
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_sINGERS':
            return {
                ...state,
                singerList: action.data
            }
            break;
    }
    return state
}

export default reducer