
let initialState = {
    allCoins: null,
    error: false
}
let itemReducer = (state = initialState, action)=>{
    switch (action.type){
        case "GET_ALL_COINS":
            return{
                ...state,
                allCoins: action.payload
            }
        case "SET_ERROR":
            return{
                ...state,
                error: true
            }
            case "SET_FALSE_ERROR":
            return{
                ...state,
                error: false
            }
        default: 
            return state;
    }
}
export default itemReducer;