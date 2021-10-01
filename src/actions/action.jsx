export const search = (searchedWord) => {
    return {
      type: "SEARCH_ACTION",
      payload: searchedWord
    };
  };    
export const sorting = (sortType) => {
    return {
      type: "SORT_ACTION",
      payload: sortType
    };
  }; 