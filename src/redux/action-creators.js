export const getAllCoinsAC = (payload)=>{
    return{
        type: "GET_ALL_COINS",
        payload
    }
}
export const addSearchTextAC = (payload)=>{
    return{
        type: "ADD_SEARCH_TEXT",
        payload
    }
}
export const addNewAllCoinsAC = (payload)=>{
    return{
        type: "ADD_NEW_ALL_COINS",
        payload
    }
}
export const nullSearchAC = ()=>{
    return{
        type: "NULL_SEARCH"
    }
}
export const setErrorAC = ()=>{
    return{
        type: "SET_ERROR"
    }
}
export const setFalseErrorAC = ()=>{
    return{
        type: "SET_FALSE_ERROR"
    }
}