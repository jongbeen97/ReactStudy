import type React from "react"
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Post from "./pages/Post";

const App: React.FC = () => {
    return(
        <>
        <header>
          <h1>Wilcommen</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/user/1">User</Link>
            <Link to="/post/2/comments/3">Post</Link>
          </nav>
        </header>
        <main>
          {/* 경로 변수는 ": 변수" 형태로 사용합니다. */}
          <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/user/:id" element={<User/>}>User</Route>
            <Route path="/post/:pid/comments/:cid" element={<Post/>}>Post</Route>
          </Routes>
        </main> 
        </>
    )
  }

  export default App;