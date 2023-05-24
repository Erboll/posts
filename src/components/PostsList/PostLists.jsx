import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostLists = ({ post, userImg }) => {
  const [comments, setComments] = useState();
  const [showComment, setShowComment] = useState(false);

  const getComments = useCallback(async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + post.id + "/comments"
    );
    const response = request.data;
    setComments(response);
    setShowComment(true);
  }, [post.id]);

  const com = showComment ? (
    <div className="mt-3">
      {comments.map((c) => (
        <div className="card card-body mb-2">
          <h5>{c.email}</h5>
          <div>{c.body}</div>
        </div>
      ))}
    </div>
  ) : (
    ""
  );

  return (
    <>
      <Link
        to={"/about-user/" + post.id}
        className="card mt-5 text-decoration-none"
      >
        <div className="card-body">
          <div className="mb-2" style={{ width: "100px" }}>
            <img className="img-fluid" src={userImg} alt={post.title} />
          </div>

          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </Link>

      {com}
      <button className="btn btn-info  ms-1" onClick={getComments}>
        Commments
      </button>
      <button
        className="btn btn-secondary ms-4"
        onClick={() => setShowComment(false)}
      >
        Close
      </button>
    </>
  );
};

export default PostLists;
