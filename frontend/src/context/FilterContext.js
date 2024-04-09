/* eslint-disable no-unused-vars */
import { Children, createContext, useContext, useState } from "react";
const FilterContext = createContext();
function FilterProvider() {
  const [filter, setFilter] = useState("All");
  const [filterData, setFilterData] = useState("");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);



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
function useFilter(){
    const context = useContext(FilterContext);

}

export {FilterProvider,useFilter};
