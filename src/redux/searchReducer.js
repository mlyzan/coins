let initialState = {
    searchText: "",
    newAllCoins: null
};

const searchReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_SEARCH_TEXT":{
            return{
                ...state,
                searchText: action.payload
            }
        }
        case "ADD_NEW_ALL_COINS":{
            return{
                ...state,
                newAllCoins: action.payload
            }
        }
        case "NULL_SEARCH":{
            return{
                ...state,
                searchText: "",
                newAllCoins: null
            }
        }
        default:
            return state;
    }
}
export default searchReducer;