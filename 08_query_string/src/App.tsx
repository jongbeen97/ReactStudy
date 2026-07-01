import type React from "react";
import Home from "./pages/Home";
import SearchForm from "./pages/SearchForm";
import SearchResult from "./pages/SearchResult";
import { Route, Routes } from "react-router-dom";

const App : React.FC = () =>{
    return(
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchForm />} />
            <Route path="/searchresult" element={<SearchResult />} />
          </Routes>
        </>
    );
}
export default App;