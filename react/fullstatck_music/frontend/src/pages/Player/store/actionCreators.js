import * as actionTypes from './constants'
export const changerPlayList=(data)=>({//同步
    type:actionTypes.SET_PLAYLIST,
    data:data
})