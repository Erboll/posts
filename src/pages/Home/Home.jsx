import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import PostLists from "../../components/PostsList/PostLists";
import UserImg from "./user.png";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = useCallback(async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const response = await request.data;

    setPosts(response);
  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);
  return (
    <div>
      {posts.map((post) => (
        <PostLists post={post} userImg={UserImg} />
      ))}
    </div>
  );
};

export default Home;
