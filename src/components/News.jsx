import React from "react";
import Shape from "./shared/shape";
import mask1 from "./assets/Mask1.png";
import mask2 from "./assets/Mask2.png";
import mask3 from "./assets/Mask3.png";

const data = [
  {
    mask: mask1,
    title:
      "الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية",
    des: "شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات",
    link: "/",
  },
  {
    mask: mask2,
    title: "لماذا يعتبر أمان التطبيق مهمًا للأعمال؟",
    des: "تطبيقات البرمجيات هي مكونات أساسية لنجاح المنظمة. لسوء الحظ ، بينما التطبيق",
    link: "/",
  },
  {
    mask: mask3,
    title: "حشد الأمن - هل هو بديل للاختراق؟",
    des: "نمت شعبية برامج الأمن الجماعي إلى الحد الذي وصلت إليه بعض الشركات",
    link: "/",
  },
];

const News = () => {
  return (
    <div className="news bg-black py-24">
      <div className="container mx-auto">
        <div className="heading text-white text-right mx-10 mb-10">
          <Shape />
          <h3 className="header font-bold text-3xl my-2"> الأخبار </h3>
        </div>
        <div className="articles flex flex-col gap-5 justify-center items-center mx-2">
          {data.map((item, index) => {
            return (
              <SingleNews
                key={index}
                image={item.mask}
                title={item.title}
                des={item.des}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;

const SingleNews = ({ image, title, des, link }) => {
  return (
    <div className="single bg-lightBlack text-white flex p-6 w-full rounded-3xl flex-row-reverse">
      <div className="right_img hidden sm:flex items-center relative">
        <img className="w-40" src={image} alt="news_image" />
        <div className="overlay absolute top-0 left-0 h-full w-full rounded-3xl bg-blue-500 opacity-60"></div>
      </div>
      <div className="info sm:w-3/4 text-right flex flex-col justify-center mr-2 md:mr-10">
        <h4 className="title sm:text-xl font-bold">{title}</h4>
        <p className="des my-2 text-trustTextGray text-sm">{des}</p>

        <a className="flex justify-end my-2 text-trustBlue2" href="/">
          <span>
            <svg
              width="24"
              height="24"
              fill="#019FFE"
              className="transform rotate-180"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </span>
          <span className=" ml-1">اقرأ المقال</span>
        </a>
      </div>
    </div>
  );
};
