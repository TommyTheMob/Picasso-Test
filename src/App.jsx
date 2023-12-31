import React from "react";
import PostsListPage from "./pages/PostsListPage.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from "./pages/PostPage.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/Picasso-Test" element={<PostsListPage />} />
            <Route path="/Picasso-Test/posts/:postId" element={<PostPage />} />
        </Routes>
    </Router>
  )
}

export default App
