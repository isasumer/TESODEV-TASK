export const search = (searchedWord) => {
    return {
      type: "SEARCH_ACTION",
      payload: searchedWord
    };
  };    
export const sorting = (searchedWord) => {
    return {
      type: "SORTING_ACTION",
      payload: searchedWord
    };
  };    