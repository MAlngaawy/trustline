import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export const Posts = () => {
  const { data, setData } = useStateContext();

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
          <button onClick={() => fetchData()}>Click To fetch data</button>
          {data ? (
            data.map((item) => {
              return <SinglePost title={item.title} id={item.id} />;
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
