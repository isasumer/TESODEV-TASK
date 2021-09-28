import data from "../components/data";

const INITIAL_STATE = {
  data: data,
  filteredData:[]
};


const reducer = (state =INITIAL_STATE, action) => {
  switch(action.type) {
    case("SEARCH"):
    return {...state, filteredData:[...state.filteredData, action.payload]};
    default:
        return state; 
  }
}

export default reducer;