/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";


function Nav() {
  const navigate = useNavigate();
  return (
    <div className="  w-[100vdw] text-xl font-semibold flex py-5 justify-between  bg-[#00c46a] text-white items-center">
      <div className=" flex items-center  ">
        <img className=" h-20" src={Logo} alt="" />
        <p onClick={() => navigate("/books")}>Book Shop</p>
      </div>
      <div>
        <ul className=" flex gap-5 mr-10">
          <li>
            <Link className=" hover:text-white hover:opacity-70" to="/books">
              Home
            </Link>
          </li>
          <li>
            <Link className=" hover:text-white hover:opacity-70" to="/add">
              Add Book
            </Link>
          </li>
          
            
          
        </ul>
      </div>
    </div>
  );
}

export default Nav;
