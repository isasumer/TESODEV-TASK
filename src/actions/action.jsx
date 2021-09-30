export const search = (searchedWord) => {
    return {
      type: "SEARCH_ACTION",
      payload: searchedWord
    };
  };    
export const sorting = (sortType) => {
  console.log(sortType)
    return {
      type: "SORT_ACTION",
      payload: sortType
    };
  };    