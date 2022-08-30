import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer bg-black text-white py-10">
      <div className="container mx-auto border-t border-gray-400 flex flex-col-reverse md:flex-row items-center md:items-start justify-between pt-6">
        <div className="social flex gap-4 mt-6 md:mt-0">
          <div className="twitter cursor-pointer">
            <Twitter />
          </div>
          <div className="linkedin cursor-pointer">
            <Linkedin />
          </div>
        </div>
        <ul className="links font-bold flex flex-col gap-4">
          <li className="cursor-pointer">للشركات</li>
          <li className="cursor-pointer">للباحثين</li>
          <li className="cursor-pointer">بيانات التواصل</li>
          <li className="cursor-pointer">تواصل معنا</li>
        </ul>
        <div className="main-info flex flex-row-reverse md:flex-col items-end gap-2 md:gap-10 mb-4 md:mb-0 mx-6 md:mx-0">
          <div className="logo ml-4">
            <Logo className="w-20 md:w-32 cursor-pointer" />
          </div>
          <div className=" text-right text-xs md:text-base text-trustTextGray2">
            <p className="address">
              واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564
            </p>
            <p className="copyrights">Trustline - جميع الحقوق محفوظة 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
