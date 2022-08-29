import React, { useState } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import cn from "classnames";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="bg-transparent relative text-white flex px-4 sm:py-4 md:px-24 items-center justify-around">
      <div className="bar sm:hidden" onClick={() => setOpen(true)}>
        Open
      </div>
      <div
        className={cn(
          "nav-items transition-all transform absolute z-10 sm:static bg-black sm:bg-transparent w-full flex flex-col-reverse sm:flex-row justify-end md:justify-evenly items-center pt-16 sm:py-0 sm:px-4 text-xm sm:justify-between",
          open === false ? "very-top" : "top-0"
        )}
      >
        <div
          className="close absolute left-10 top-5 sm:hidden"
          onClick={() => {
            setOpen(false);
            console.log("clicked", open);
          }}
        >
          Close
        </div>
        <div className="lang font-bold my-2">ENG</div>
        <div className="login my-4 bg-trustGray rounded-3xl text-black px-6 h-fit">
          دخول
        </div>
        <ul className="links flex justify-between flex-col sm:flex-row">
          <Li text="ترست لاين" />
          <Li text="لماذا ترست لاين ؟" />
          <Li text="الية العمل" />
          <Li text="تواصل معنا" />
        </ul>
      </div>
      <div className="logo md:flex justify-center">
        <Logo className="w-20 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

const Li = ({ text }) => {
  return (
    <li className="mx-4 sm:mx-2 my-2 sm:text-sm cursor-pointer">{text}</li>
  );
};
