import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useState } from "react";

export const Posts = () => {
  const { data, setData } = useStateContext();
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    id: 0,
  });
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="posts">
      <div className="topbar py-4 mb-10 bg-gray-400">
        <Link to="/" className="font-bold relative ">
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
          HomePage
        </Link>
      </div>
      <div className="content mx-4">
        <div className="container mx-auto flex justify-center items-center flex-col">
          <button className=" border p-4" onClick={() => fetchData()}>
            Click To fetch data from the server
          </button>
          <AddPost
            setNewPost={setNewPost}
            newPost={newPost}
            setData={setData}
            data={data}
          />
          {data ? (
            data.map((item) => {
              return (
                <SinglePost key={item.id} title={item.title} id={item.id} />
              );
            })
          ) : (
            <div className="text-2xl my-4 font-medium">
              Click The button above to fetch data
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SinglePost = ({ title, id }) => {
  return (
    <div className="single my-4 border border-black hover:bg-gray-400 rounded-md w-full  ">
      <Link className="text-left flex " to={`/posts/${id}`}>
        <div className="post-num p-4 bg-black text-white w-fit">{id}</div>
        <h3 className="font-bold p-4">{title}</h3>
      </Link>
    </div>
  );
};

const AddPost = ({ newPost, setNewPost, setData, data }) => {
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

  console.log();
  const submitPost = (e) => {
    e.preventDefault();
    setData([...data, { ...newPost, id: data[data.length - 1].id + 1 }]);
    setNewPost({
      title: "",
      body: "",
      id: 0,
    });
    console.log(data);
  };

  return (
    <div className="add-post my-6">
      <h2 className=" font-bold">Add new Post</h2>
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
