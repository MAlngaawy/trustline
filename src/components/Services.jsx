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
  return (
    <div className="services py-20 relative p-2">
      <div className="overlay absolute top-0 left-0 h-1/2 w-full bg-black -z-10"></div>
      <div className="container bg-white rounded-2xl sm:mx-auto text-right shadow-md py-20 px-4 sm:px-10">
        <div className="first lg:mx-10 flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <div className="heading p-6 md:w-1/2">
            <Shape />
            <h3 className="header font-bold text-3xl my-2">الخدمات والحلول</h3>
            <p className="des text-sm ">
              نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
            </p>
          </div>
          {/* {data.map((service, index) => ( */}
          <div className="md:w-1/2">
            <SingleService
              key={data[0].title}
              shape={data[0].shape}
              title={data[0].title}
              des={data[0].des}
            />
          </div>
        </div>
        <div className="second lg:mx-10 flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <div className="md:w-1/2">
            <SingleService
              key={data[1].title}
              shape={data[1].shape}
              title={data[1].title}
              des={data[1].des}
            />
          </div>
          <div className="md:w-1/2">
            <SingleService
              key={data[2].title}
              shape={data[2].shape}
              title={data[2].title}
              des={data[2].des}
            />
          </div>
        </div>
        <div className="Third lg:mx-10 flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <div className="md:w-1/2">
            <SingleService
              key={data[3].title}
              shape={data[3].shape}
              title={data[3].title}
              des={data[3].des}
            />
          </div>
          {/* {data.map((service, index) => ( */}
          <div className="md:w-1/2">
            <SingleService
              key={data[4].title}
              shape={data[4].shape}
              title={data[4].title}
              des={data[4].des}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const SingleService = ({ shape, title, des }) => {
  return (
    <div
      className={`single bg-boxGray p-4 md:p-6 m-2 flex flex-row-reverse justify-between rounded-md`}
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
