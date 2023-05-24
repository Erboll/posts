import React from "react";
import { useNavigate } from "react-router-dom";

const BackClick = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-2 ms-2 ">
      <button onClick={() => navigate("/")} type="button" class="btn btn-dark">
        Back
      </button>
    </div>
  );
};

export default BackClick;
