/* eslint-disable no-unused-vars */
import { Children, createContext, useContext, useState } from "react";
const FilterContext = createContext();
function FilterProvider() {


  return (
    <FilterContext.Provider
      value={{
        filter,
        filterData,
        books,
        page,
        postsPerPage,
        setFilter,
        setFilterData,
        setBooks,
        setPage,
        setPostPerPage,
      }}
    >
      {Children}
    </FilterContext.Provider>
  );
}
function useFilter() {
  const context = useContext(FilterContext);
  return context;
}

export { FilterProvider, useFilter };
