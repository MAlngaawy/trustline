import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { data, setData } = useStateContext();

  useEffect(() => {
    setPost(data.filter((post) => post.id === +id));
  }, [id, data, setPost]);

  return (
    <div className="single">
      <div className="topbar py-4 mb-10 bg-gray-400">
        <Link to="/posts  " className="font-bold relative ">
          <span className=" absolute -left-10 ">
            <svg
              width="24"
              height="24"
              fill="#000000"
              className="transform rotate-180"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </span>
          Posts
        </Link>
      </div>

      {post && (
        <div className="data">
          <h1 className="text-xl font-bold">{post[0].title}</h1>
          <p>{post[0].body}</p>
        </div>
      )}
    </div>
  );
};
