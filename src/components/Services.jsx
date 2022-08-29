import React from "react";
import people from "./assets/people.png";
import vector from "./assets/Vector.png";
import keyboard from "./assets/keyboard.png";
import arrow from "./assets/arrow.png";
import code from "./assets/code.png";
import Shape from "./shared/shape";

const data = [
  {
    shape: people,
    title: "الفريق الأحمر",
    des: "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.",
  },
  {
    shape: arrow,
    title: "تقييم الضعف",
    des: "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.",
  },
  {
    shape: vector,
    title: "المصادر الأمنية",
    des: "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.",
  },
  {
    shape: code,
    title: "مراجعة الكود",
    des: "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.",
  },
  {
    shape: keyboard,
    title: "فحص الموقع و الجوال",
    des: "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.",
  },
];

const Services = () => {
  console.log(data.length);
  return (
    <div className="services py-20 relative">
      <div className="overlay absolute top-0 h-1/2 w-full bg-black -z-10"></div>
      <div className="container bg-white rounded-2xl mx-auto text-right shadow-md p-2 md:p-16 lg:p-32 grid md:grid-cols-2 grid-flow-row-dense">
        <div className="heading m-10 md:order-1">
          <Shape />
          <h3 className="header font-bold text-3xl my-2">الخدمات والحلول</h3>
          <p className="des text-sm ">
            نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
          </p>
        </div>
        {data.map((service, index) => (
          <SingleService
            key={service.title}
            shape={service.shape}
            title={service.title}
            des={service.des}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

const SingleService = ({ shape, title, des, index }) => {
  return (
    <div
      className={`single bg-boxGray p-4 md:p-10 m-2 flex flex-row-reverse justify-between rounded-md order-${index}`}
    >
      <div className="flex flex-col justify-center items-center text-center w-3/12">
        <div className="shape">
          <img className="w-14" src={shape} alt="" />
        </div>
        <h3 className="text-sm font-bold  text-trustBlue1">{title}</h3>
      </div>
      <div className="des border-r border-trustBlue1 w-4/6 pr-4 sm:pr-10">
        {des}
      </div>
    </div>
  );
};
