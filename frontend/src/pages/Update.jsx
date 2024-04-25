import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const location = useLocation();
  const [books, setBooks] = useState({
    title: "",
    authorname: "",
    price: null,
    stock: null,
    publishing_year: "",
    publication: "",
  });

  const handleChange = (e) => {
    setBooks((currState) => ({
      ...currState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const addedBook = await axios.put("http://localhost:5001/books/"+location.pathname.split("/")[2], books);
    console.log(addedBook.data);
    navigate("/books");
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center mt-20  ">
        <h1 className="text-xl px-6 py-4">
          Update book
        </h1>
      </div> 
      <table className=" flex items-center justify-center  text-xl py-8 ">
        <tbody className=" border border-[#00c46a] py-4 px-4 rounded-xl ">
          <tr>
            <td>Title:</td>
            <td>
              <input
                className=" text-[#242a2e] px-4"
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Author name:</td>
            <td>
              <input
                className=" text-[#242a2e] px-4"
                type="text"
                placeholder="Author Name"
                name="authorname"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>
              <input
                className=" text-[#242a2e] px-4"
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Quantity:</td>
            <td>
              <input
                className=" text-[#242a2e] px-4"
                type="number"
                placeholder="Stock"
                name="stock"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Year of publishing:</td>
            <td>
              <input
                className=" text-[#242a2e] px-4"
                type="text"
                placeholder="Year of Publishing"
                name="publishing_year"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Publication:</td>
            <td>
              <input
                className=" text-[#242a2e] px-4"
                type="text"
                placeholder="Publication"
                name="publication"
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-center">
        <button
          onClick={handleClick}
          className="w-20 h-10 bg-[#00c46a] text-white rounded-lg mt-3"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Update;
