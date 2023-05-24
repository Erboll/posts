import React from "react";

const User = ({ user, posts }) => {
  return (
    <div className="card mt-5 ms-5 pt-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
        <p className="card-text">{user.username}</p>
      </div>
      <h2 className="text-center">Post lists</h2>
      <hr />
      {posts.map((s) => (
        <>
          <h3 className=" ms-2 mb-4">{s.title}</h3>
          <div className=" ms-2">{s.body}</div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default User;
