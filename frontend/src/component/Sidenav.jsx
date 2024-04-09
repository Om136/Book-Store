import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="flex justify-center">
      <div className=" w-1/6 h-screen bg-[#242a2e]">
        <div className=" flex flex-col items-center">
          <div className=" w-20 h-20 bg-[#00c46a] rounded-full mt-10 flex items-center justify-center">
            <h1 className=" text-3xl font-bold text-white">=</h1>
          </div>
          <div className=" mt-10">
            <button className=" w-20 h-10 bg-[#00c46a] text-white rounded-lg">
              Home
            </button>
            <button className=" w-20 h-10 bg-[#00c46a] text-white rounded-lg mt-3">
              Books
            </button>
            <button className=" w-20 h-10 bg-[#00c46a] text-white rounded-lg mt-3">
              <Link to="/add">Add Book</Link>
            </button>
            <button className=" w-20 h-10 bg-[#00c46a] text-white rounded-lg mt-3">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
