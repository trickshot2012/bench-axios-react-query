import React, { useState, useEffect } from "react";

const FetchUseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setStartTime(performance.now());
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setEndTime(performance.now());
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const fetchDuration = endTime ? `${(endTime - startTime).toFixed(2)} ms` : null;

  if (isLoading) return <div>Fetching projects ...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {fetchDuration && <p>Fetch duration: {fetchDuration}</p>}
    </div>
  );
};

export default FetchUseEffect;
