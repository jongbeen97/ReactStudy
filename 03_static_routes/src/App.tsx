import type React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Post from "./pages/Post";

const App : React.FC = () => {

  return(
    <>
      <header>
        <h1>Hola Mundo</h1>
        <nav>
          <Link to={"/"}>HOME</Link>  
          <Link to={"/User"}>USER</Link>  
          <Link to={"/Post"}>POST</Link>  
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        
      </main>
      <footer>
        <p>&copy; My Vite App. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App;