import React, { useState } from "react";
import "../styles/global.css";
import Post from "./components/Post";
import useFetchPosts from "./hooks/useFetchPosts";

const Posts = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { posts } = useFetchPosts(page);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 1000);
  };

  return (
    <div className="content">
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div className="loader-wrapper center">
        {loading ? (
          <div className="loader-dual-ring"></div>
        ) : (
          <button
            className="btn-default"
            onClick={handleShowMore}
            disabled={loading}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Posts;
