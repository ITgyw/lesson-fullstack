// use开头 
// useEffect useState useRef
// 钩子 
// 如果没有react hooks 函式数组件不能完成什么功能
/**
 * 提供勾选、全选、反选等功能
 * 提供筛选勾选中的数据的函数 filter
 * 在数据更新时 自动剔除陈旧项
 */
export const useChecked = () => {
    return {
        checkMap,
        onCheckedChange,
        dispatch, //useReducer
        filterChecked,
        onCheckedAllChange,
        checkedAll
    }
}