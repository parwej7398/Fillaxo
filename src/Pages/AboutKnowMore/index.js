import React from "react";
import factory from "../../assest/factary.png";
import mashine from "../../assest/masine.png";
import { Link } from "react-router-dom";

const AboutKnowMore = () => {
  return (
    <div>
      <div className="lg:flex max-sm:flex max-sm:flex-col-reverse">
        <div className="lg:w-[50%] flex flex-col lg:gap-8 bg-red-800 text-white lg:p-24 p-16">
          <p className="underline text-xl">Aseptic 200 ML Brick</p>
          <p className="lg:text-5xl text-2xl">
            MACHINE FOR NO PRESERVATIVE APPLICATION
          </p>
        </div>
        <div className="lg:w-[50%]">
          <img src={factory} alt="" className="lg:h-[25rem] w-full" />
        </div>
      </div>
      <div className="lg:flex px-[6.5%]">
        <div className="lg:w-[50%] flex flex-col gap-8 lg:p-20 p-2">
          <p className="lg:text-3xl text-xl font-semibold text-red-800">
            Filling machine <br />
            ambient 200 ML
          </p>
          <p className="text-xl font-semibold">
            Our 200 ML aseptic filling machine comes with plug and play design,
            easy installation, operation and after sales services.
          </p>
        </div>
        <div className="lg:w-[50%]">
          <img src={mashine} alt="" className="lg:h-[30rem] w-full" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 p-2  lg:px-[12%]">
        <div className="flex flex-col lg:gap-5 gap-2">
          <p className="lg:text-2xl text-red-800 text-xl font-bold">
            {" "}
            Application
          </p>
          <p className="lg:text-lg">
            Suitable for high & low acid products in dairy and beverage
            industry. Also suitable for liquor industry.
          </p>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <p className="lg:text-2xl text-red-800 text-xl font-bold">
            {" "}
            High efficiency
          </p>
          <p className="lg:text-lg">
            Suitable for high & low acid products in dairy and beverage
            industry. Also suitable for liquor industry.
          </p>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <p className="lg:text-2xl text-red-800 text-xl font-bold">
            {" "}
            Reliable
          </p>
          <p className="lg:text-lg">
            Suitable for high & low acid products in dairy and beverage
            industry. Also suitable for liquor industry.
          </p>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <p className="lg:text-2xl text-red-800 text-xl font-bold">
            {" "}
            Automation
          </p>
          <p className="lg:text-lg">
            Suitable for high & low acid products in dairy and beverage
            industry. Also suitable for liquor industry.
          </p>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <p className="lg:text-2xl text-red-800 text-xl font-bold"> Hygiene</p>
          <p className="lg:text-lg">
            Suitable for high & low acid products in dairy and beverage
            industry. Also suitable for liquor industry.
          </p>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <p className="lg:text-2xl text-red-800 text-xl font-bold">
            {" "}
            Spare - part
          </p>
          <p className="lg:text-lg">
            Suitable for high & low acid products in dairy and beverage
            industry. Also suitable for liquor industry.
          </p>
        </div>
      </div>

      <div className="flex items-center lg:p-20 p-10 lg:gap-5 gap-2">
        <p className="text-lg">Do you want know more?</p>
        <Link to="/contactus">
          <button className="border h-11 lg:w-40 p-2 bg-red-800 text-white rounded-md lg:font-bold">
            → CONTACT US!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutKnowMore;
