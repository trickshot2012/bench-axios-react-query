import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const retrievePosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const AxiosUseQuery = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery("postsData", async () => {
    setStartTime(performance.now());
    const data = await retrievePosts();
    setEndTime(performance.now());
    return data;
  });

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

export default AxiosUseQuery;
