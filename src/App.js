import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { useEffect } from "react";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { setData } = useStateContext();

  useEffect(() => {
    console.log("Effect");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);

  return (
    <div className="App font-tajwal">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
