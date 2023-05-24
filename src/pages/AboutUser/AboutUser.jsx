import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "../../components/User/User";
import BackClick from "../../components/BackClick/BackClick";

const AboutUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const getUser = useCallback(async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const response = request.data;
    setUser(response);
  }, [id]);

  const getPostFromUser = useCallback(async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id + "/posts"
    );
    setPosts(request.data);
  }, [id]);

  useEffect(() => {
    void getUser();
    void getPostFromUser();
  }, [getUser, getPostFromUser]);

  return (
    <div>
      <BackClick />
      <User user={user} posts={posts} />
    </div>
  );
};

export default AboutUser;
