import React from "react";
import blueTeam from "./assets/blue-team.png";
import purpleTeam from "./assets/purple-team.png";
import Shape from "./shared/shape";

const Team = () => {
  return (
    <div className="team text-right my-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="content flex flex-col justify-center bg-boxGray rounded-tl-xl rounded-bl-xl h-fit p-10 md:p-20">
          <Shape />
          <h3 className="title font-bold text-3xl my-2">فريقنا</h3>
          <p className="des text-trustTextGray2">
            في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات
            قادمة.
          </p>
          <p className="des text-trustTextGray2">
            يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.
          </p>
        </div>
        <div className="images grid grid-cols-3 gap-2">
          <img className="col-span-2" src={blueTeam} alt="blue Team" />
          <img
            className="col-span-1 h-full"
            src={purpleTeam}
            alt="purple Team"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
