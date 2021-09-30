import data from "../components/data";

const INITIAL_STATE = {
  data: data,
  filteredData: [],
};
const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_ACTION":
      return {
        ...state,
        filteredData: data.filter((val) => 
        val[0].toLowerCase().includes(action.payload.toLowerCase()))
      }
    case "SORT_ACTION":
      switch (action.payload) {
        case "name_desc":
        return {
        ...state,
        filteredData: state.filteredData.sort()
      }
      default:
        return state;
    }
      default:
        return state;
      }
    };
    
export default reducer;
