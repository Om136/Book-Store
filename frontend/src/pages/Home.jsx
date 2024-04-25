import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
// import { FilterProvider } from "./context/FilterContext.js";


function Home() {
  return (
    <div className="">
      {/* <FilterProvider> */}
        <Nav />
        <Outlet />
      {/* </FilterProvider> */}
    </div>
  );
}

export default Home;
