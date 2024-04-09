import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";

function Home() {
  return (
    <div className="">
      <FilterProvider>
        <Nav />
        <Outlet />
      </FilterProvider>
    </div>
  );
}

export default Home;
