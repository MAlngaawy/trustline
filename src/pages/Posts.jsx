import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";

export const Posts = () => {
  const { data, setData } = useStateContext();

  useEffect(() => {
    console.log("Effect");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);

  return (
    <div className="posts">
      <div className="topbar py-10 bg-gray-400">
        <Link to="/" className="font-bold relative">
          <span className=" absolute -left-10 text-3xl">
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
      <div className="content">
        <div className="container">
          {data.map((item) => {
            return <h4> {item.title} </h4>;
          })}
        </div>
      </div>
    </div>
  );
};
