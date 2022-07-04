let defaultState={
    singersList:[]
}
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case'CHANGE_SINGERSLIST':
        return{
            ...state,
            singersList:action.data
        }
        //console.log('--------');
        break;
    }
    return state
}
export default reducer