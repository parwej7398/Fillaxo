import React from "react";
import factory from "../../assest/medicn.png";
import machine from "../../photo/Filling machine.png";
import { Link } from "react-router-dom";

const ML_Brick_1000 = () => {
  return (
    <div>
      <div className="lg:flex max-lg:flex max-lg:flex-col-reverse">
        <div className="lg:w-[50%] flex flex-col lg:gap-8 bg-[#c71035] text-white lg:p-18 p-12">
          <p className="underline text-xl font-semibold">
            Aseptic 1000 ML Brick
          </p>
          <p className="lg:text-5xl text-2xl">
            MACHINE FOR LONG SHELF APPLICATIONS
          </p>
        </div>
        <div className="">
          <img src={factory} alt="" className="lg:h-[20rem] w-full" />
        </div>
      </div>
      <div className="lg:flex px-[8%]">
        <div className="lg:w-[50%] flex flex-col gap-8 lg:p-20 p-2">
          <p className="lg:text-3xl text-xl font-semibold text-red-700">
            Filling machine <br />
            ambient 1000 ML
          </p>
          <p className="text-xl">
            Our 1000 ML aseptic filling machine comes with plug and play design,
            easy installation, operation and after sales services. Options
            available for with cap & without cap applications.
          </p>
        </div>
        <div className="lg:w-[50%]">
          <img src={machine} alt="" className="lg:h-[30rem] w-full" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-10 lg:px-[13%] p-2 lg:pr-32">
        <div className="flex flex-col gap-5">
          <p className="text-2xl text-red-700 font-bold"> Application</p>
          <p className="lg:text-lg">
            Suitable for high & low acid products in dairy and beverage
            industry.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl text-red-700 font-bold"> High efficiency</p>
          <p className="lg:text-lg">
            Our machine require minimal man power, low utility consumption &
            less operational cost. Design to fill 1000 ML brick @ 6000 PKS: H.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl text-red-700 font-bold"> Reliable</p>
          <p className="lg:text-lg">
            State of the art aseptic filling technologies which comes with 24 x
            7 customer support & remote excess.
          </p>
        </div>
        <div className="flex flex-col lg:gap-5">
          <p className="text-2xl text-red-700 font-bold"> Automation</p>
          <p className="lg:text-lg">
            100% automatic PLC based machine that easy to integrate with SCADA &
            remote excess system
          </p>
        </div>
        <div className="flex flex-col lg:gap-5">
          <p className="text-2xl text-red-700 font-bold"> Hygiene</p>
          <p className="lg:text-lg">
            Machine comes with aseptic chamber with proven H2O2 vapor
            sterilization system.
          </p>
        </div>
        <div className="flex flex-col lg:gap-5">
          <p className="text-2xl text-red-700 font-bold">Cap applicator</p>
          <p className="lg:text-lg">
            Cap applicator available to attach with machine which comes with
            6000 caps / hr.
          </p>
        </div>
      </div>
      <div className="lg:flex max-lg:flex max-lg:flex-col items-center  p-20 gap-5">
        <p className="text-lg">Do you want know more?</p>
        <Link to="/contactus">
          <button className="border h-11 w-40 bg-red-700 text-white rounded-md font-bold">
            → CONTACT US!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ML_Brick_1000;
