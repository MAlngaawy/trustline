import React from "react";
import group1 from "./assets/group1.png";
import group2 from "./assets/group2.png";
import group3 from "./assets/group3.png";
import group4 from "./assets/group4.png";
import Shape from "./shared/shape";

const WhyUs = () => {
  return (
    <div className="why-us bg-black text-white py-24 md:py-32 text-right">
      <div className="container mx-auto">
        <div className="content mx-10">
          <Shape />
          <h3 className="header font-bold text-3xl my-2">لماذا ترست لاين؟</h3>
          <p className="des text-sm text-trustTextGray">
            نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى
            <br />
            لرفع مستوى الأمن في جميع الكيانات والمؤسسات
          </p>
        </div>
        <div className="my-5 sections flex flex-col sm:flex-row justify-center items-center max-w-7xl flex-wrap mx-10 md:mx-auto">
          <div>
            <ImageDiv img={group1} />
            <ImageDiv img={group2} />
          </div>
          <div>
            <ImageDiv img={group3} />
            <ImageDiv img={group4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

const ImageDiv = ({ img }) => {
  return (
    <div className="image-div m-4">
      <img className="sm:w-60 md:w-80 lg:w-96" src={img} alt="whyUs" />
    </div>
  );
};
