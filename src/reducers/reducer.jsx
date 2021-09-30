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

      default:
        return state;
        case "SORT_ACTION":
          switch (action.payload) {
            case "name_asc":
              return {
                ...state,
                filteredData: state.filteredData.sort()
              }
              case "name_desc":
                return {
                  ...state,
                  filteredData: state.filteredData.sort((b, a) =>{
                    return a - b;
                  })
                }
                case "year_asc":
                  return {
                    ...state,
                    filteredData: state.filteredData.sort(function(a, b) {
                      return a - b;
                    })
                  }
                  case "year_desc":
                    return {
                      ...state,
                      filteredData: state.filteredData.sort()
                    }
                    default:
                      return state;
                    }
                    
                  }
                };
                
                export default reducer;
                