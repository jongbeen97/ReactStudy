import type React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import UserList from "./pages/users/UserList";
import PostList from "./pages/posts/PostList";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      {/* 상위 라우트 */}
      <Route path="/" element={<Layout />}>
        {/* 하위 라우트 : <Outlet/>에 표시됨 */}
        <Route index element={<Home />} />
        <Route path="users" element={<UserList />} />
        <Route path="posts" element={<PostList />} />
        <Route path="dashboard">
          <Route index />
          <Route path="info"/>
          <Route path="setting"/>
        </Route>
      </Route>
    </Routes>
  )
}
export default App;