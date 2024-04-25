/* eslint-disable no-unused-vars */
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Books from "./pages/Books.jsx";
import Add from "./pages/Add.jsx";
import Update from "./pages/Update.jsx";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" flex-col h-[100vh]  justify-center bg-[#242a2e] text-[#ececec]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Books />} />
            <Route path="/books" element={<Books />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
