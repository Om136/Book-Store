/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Book from "../component/Book";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
// import { useFilter } from "../context/FilterContext.js";

function Books() {
  // const { filter, setFilter, page, postsPerPage, books, setPage, setBooks } =
  //   useFilter();
  const [filter, setFilter] = useState("All");
  const [filterData, setFilterData] = useState("");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = page * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = books.slice(firstPostIndex, lastPostIndex);
  const maxPage = Math.ceil(books.length / postsPerPage);

  const handlePrevious = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page === maxPage) return;
    setPage((prev) => prev + 1);
  };

  const handleSearch = (e) => {
    setFilterData(e.target.value);
  };
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5001/books?filter=" + filter+"&search="+filterData
        );
        console.log(res.data);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, [filter, setBooks, filterData]);
  return (
    <div className=" ">
      <div className=" flex justify-center h-[75vh] ">
        <div className=" grid grid-cols-5 gap-24 my-14 mx-44 scroll-smooth grow">
          {currentPosts.length > 0 &&
            currentPosts.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                price={book.price}
              />
            ))}
        </div>

        <div className=" mr-3 mt-16 flex justify-center items-start gap-3  ">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className=" border-[#00c46a] text-[#00c46a]"
              >
                Filter
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              onAction={(key) => setFilter(key)}
            >
              <DropdownItem key="all">All</DropdownItem>
              <DropdownItem key="title">Title</DropdownItem>
              <DropdownItem key="price">Price</DropdownItem>
              <DropdownItem key="category">category</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <input
            className="h-9 border rounded-xl text-black"
            type="text"
            value={filterData}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className=" flex gap-4 items-center justify-center ">
        <button
          onClick={handlePrevious}
          className=" w-20 h-10 bg-[#00c46a] text-white rounded-lg mt-3"
        >
          previous
        </button>
        <span> {page} . . .</span>
        <button
          onClick={handleNext}
          className=" w-20 h-10 bg-[#00c46a] text-white rounded-lg mt-3"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Books;
