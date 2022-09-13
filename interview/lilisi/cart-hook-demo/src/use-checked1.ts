import { useEffect, useReducer, useCallback } from 'react'
const CHECKED_CHANGE = 'CHECKED_CHANGE';
const CHECKED_ALL_CHENGE = 'CHECKED_ALL_CHENGE'
// const SET_ALL_MAP = 'SET_ALL_MAP'

type CheckedMap = {
    [key;string]: boolean
}
type CheckedChange<T> = {
    // type: string
    type: typeof CHECKED_CHANGE
    payload: {
        dataItem: T
        checked: boolean
    }
}

type CheckedAllChange = {
    type: typeof CHECKED_ALL_CHENGE
    payload: boolean
}

// type SetCheckedMap = {
//     type: 
// }
type Action<T> = CheckedChange<T> | CheckedAllChange // 联合类型

export const useChecked = (dataSource) => {
    const [checkedMap, dispatch] = useReducer(
        // action 对象 type payload
        (checkedMapParam: CheckedMap, action: Action<T>) => {
            switch (action.type) {
                case CHECKED_CHANGE:
                    return {

                    }
                case CHECKED_ALL_CHENGE:
                    return {

                    }

                default:
                    return checkedMapParam
            }
        }, {})

    const onCheckedChange = () => {

    }
    const filterChecked = useCallback(() => {

    }, [checkedMap, dataSource, key])
    useEffect(() => {
        filterChecked()
    }, [dataSource])

    return {
        checkedMap,
        onCheckedChange,
        dispatch,
        filterChecked,
        checkedAll
    }
}
