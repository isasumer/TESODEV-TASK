import data from "../components/data";
const newData = [];
data.map((item) =>
newData.push({
  name: item[0],
  company: item[1],
  email: item[2],
  year: item[3].slice(6),
  country: item[4],
  city: item[5],
})
);
const INITIAL_STATE = {
  newData: newData,
  filteredData: [],
};

const reducer = (state=INITIAL_STATE, action) => {
  
  switch (action.type) {
    case "SEARCH_ACTION":
      return {
        ...state,
        filteredData: newData.filter((item) => 
        item.name.toLowerCase().includes(action.payload.toLowerCase()))
      } 
      default:
        return state;
        case "SORT_ACTION":
          switch (action.payload) {
            case "name_asc":
              return {
                ...state,
                filteredData: state.filteredData.sort((a, b) => a.name.localeCompare(b.name, undefined, { caseFirst: "upper" }))
              }
              case "name_desc":
                return {
                  ...state,
                  filteredData: state.filteredData.sort((b, a) => a.name.localeCompare(b.name, undefined, { caseFirst: "upper" }))
                }
                case "year_asc":
                  return {
                    ...state,
                    filteredData: state.filteredData.sort((b,a)=> parseFloat(b.year)-parseFloat(a.year))
                  }
                  case "year_desc":
                    return {
                      ...state,
                      filteredData: state.filteredData.sort((a,b)=>parseFloat(b.year)-parseFloat(a.year))
                    }
                    default:
                      return state;
                    }
                    
                  }
                };
                
                export default reducer;
                