import React from "react";

const Hero = () => {
  return (
    <div className="py-36 sm:py-56 px-4 m-auto relative text-white flex flex-col justify-center items-center">
      <h2 className=" text-2xl sm:text-5xl font-bold my-4">
        ترست لاين تقدم لأعمالك الحماية{" "}
      </h2>
      <p className="text-base sm:text-1xl my-4">
        ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول الأمن
        السيبراني.
      </p>
      <button className="my-4 bg-trustBlue2 py-3 px-6 rounded-3xl">
        تواصل معنا
      </button>
    </div>
  );
};

export default Hero;
