import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPosts = (page, id = null) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`;
        if (id) {
          url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        }
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (id) {
          setPosts(response.data);
        } else {
          setPosts((prevPosts) => [...prevPosts, ...response.data]);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel("Request canceled by cleanup");
    };
  }, [page, id]);

  return { posts, loading, error };
};

export default useFetchPosts;
