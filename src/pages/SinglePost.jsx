import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
// import { useNavigate } from "react-router-dom";

export const SinglePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { data, setData } = useStateContext();
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    id: 0,
  });

  useEffect(() => {
    setPost(data.filter((post) => post.id === +id)[0]);
  }, [id, data, setPost]);

  const deletePost = () => {
    let newData = data.filter((post) => post.id !== +id);
    setData(newData);
    navigate("/posts");
  };

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
        <div className="data text-left container px-4 sm:mx-auto">
          <div className="header mb-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">{post.title}</h1>
            <button
              onClick={() => deletePost()}
              className="delete p-2 rounded-sm bg-red-500 text-white font-bold"
            >
              Delete
            </button>
          </div>
          <p>{post.body}</p>
        </div>
      )}
      <UpdatePost
        navigate={navigate}
        oldPost={post}
        newPost={newPost}
        setNewPost={setNewPost}
        setData={setData}
        data={data}
      />
    </div>
  );
};

const UpdatePost = ({
  newPost,
  setNewPost,
  setData,
  data,
  oldPost,
  navigate,
}) => {
  const updateTitle = (e) => {
    setNewPost({
      title: e.target.value,
      body: newPost.body,
    });
  };

  const updateBody = (e) => {
    setNewPost({
      title: newPost.title,
      body: e.target.value,
    });
  };

  const submitPost = (e) => {
    e.preventDefault();
    const newState = data.map((obj) => {
      if (obj.id === oldPost.id) {
        return {
          ...obj,
          title: newPost.title ? newPost.title : oldPost.title,
          body: newPost.body ? newPost.body : oldPost.body,
        };
      }
      return obj;
    });
    // setData([...data, { ...newPost, id: data[data.length - 1].id + 1 }]);
    setData(newState);
    setNewPost({
      title: "",
      body: "",
      id: 0,
    });
    navigate("/posts");
  };

  return (
    <div className="add-post my-6 max-w-md mx-4 sm:mx-auto ">
      <h2 className=" font-bold">Update This Post</h2>
      <form
        action="sunmit"
        className="flex flex-col gap-3"
        onSubmit={submitPost}
      >
        <input
          className="border p-2"
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={updateTitle}
        />
        <input
          className="border p-2"
          type="text"
          value={newPost.body}
          placeholder="Body"
          onChange={updateBody}
        />
        <input
          className="block bg-gray-600 text-white py-2 px-6"
          type="submit"
          value="Click"
        />
      </form>
    </div>
  );
};
