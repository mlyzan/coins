
let initialState = {
    allCoins: null
}
let itemReducer = (state = initialState, action)=>{
    switch (action.type){
        case "GET_ALL_COINS":
            return{
                ...state,
                allCoins: action.payload
            }
        default: 
            return state;
    }
}
export default itemReducer;