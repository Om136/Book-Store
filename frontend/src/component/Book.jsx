import axios from "axios";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const handleDelete = async (id) => {
  await axios.delete("http://localhost:5001/books/" + id)
  window.location.reload()
  // alert("Book removed successfully")
}
function Book({ title, price,id }) {

  return (
    <div className=" flex flex-col items-center ">
      <img className=" h-32 w-32 border  bg-slate-400" src="" alt="img" />
      <div className=" flex text-xs  flex-col items-center w-32 border">
        <h3>{title}</h3>
        <h3>{price} Rs.</h3>
        <div className=" flex gap-2 mb-3">
          <button className=" w-9 h-4 px-3 bg-[#00c46a] text-[8px] text-white rounded-lg mt-1 flex items-center justify-center">
            <Link to={`/update/${id}`}>Update</Link>
          </button>
          <button
            onClick={() => handleDelete(id)}
            className=" w-9 h-4 px-3  bg-red-500 text-[8px] text-white rounded-lg mt-1 flex items-center justify-center"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
