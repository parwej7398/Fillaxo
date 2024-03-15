import React from "react";
import Process from "../../assest/Process equipment.png";
import sterlizer from "../../photo/2ndimage.jpg";
import sterlizeruth from "../../photo/uhtsterilizer.jpg";
import homogenizer from "../../photo/HOMOGENIZER-removebg-preview.png";
import pasterizer from "../../photo/pasteurizer.png";
import suger from "../../photo/sugerdisslovery.png";
import mixing from "../../photo/mixingtank.png";
import cipsysterm from "../../photo/cipsystem.png";
import { Button } from "@mui/material";

const ProcessEquipment = () => {
  return (
    <div>
      <div>
        <div className="lg:flex-row-reverse flex flex-col-reverse">
          <div className="lg:w-[50%]">
            <img src={Process} alt="" className=" lg:h-[20rem] h-32 w-full" />
          </div>
          <div className="lg:w-[50%] flex flex-col p-10 gap-2 lg:gap-8 bg-red-600 text-white lg:p-20">
            <p className="underline">Process equipment</p>
            <p className="lg:text-5xl text-2xl">
              CORE INNOVATIVE AND UNIQUE ENGINEERING
            </p>
          </div>
        </div>
        <div className="lg:px-[12%] p-10 font-sans text-lg">
          <p>
            Fillaxo offers the best-in-class process equipment which require to
            cover 360 degree aspects of dairy, beverage and liquor production.
            We closely work with customers to better understanding their needs
            and offer them tailor made trunkey solutions and process equipment
            modification. Our highly skilled team of engineers always available
            to increase productivity and operation cost reduction. Explore our
            equipment to get best plant & machinery as per your product need.
          </p>
        </div>
        <div className="px-[12%]">
          <img src={sterlizer} alt="" className=" w-full lg:h-[30rem]" />
        </div>

        <div className="lg:flex-row-reverse flex p-2 flex-col-reverse lg:px-[12%]  lg:justify-between lg:pt-10">
          <div className="lg:w-[50%]">
            <img src={sterlizeruth} alt="" className="h-[30rem]" />
          </div>
          <div className="lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]">
            <p className="font-sans text-red-600 text-2xl font-semibold">
              UHT STERILIZER
            </p>
            <p className="text-lg">
              High-end UHT sterilizer it can go upto 140 Deg C and available as
              stand - alone or as part of a complete line solution. Unit is
              suitable for fruit juices, tea, coffee, vegan milk, milk and milk
              by products.
            </p>
            <p className="text-lg">
              Write to us your requirement at: info@fillaxo.com
            </p>
            <Button
              size="large"
              className="!bg-red-700 !text-white !w-fit !p-3"
            >
              Request Quote!
            </Button>
          </div>
        </div>
        <div className="lg:flex-row-reverse flex flex-col pt-4 lg:justify-center lg:px-[12%] lg:pt-10 p-2">
          <div className="lg:flex flex flex-col gap-2 lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]">
            <p className="font-sans text-red-600 lg:text-2xl text-2xl font-semibold">
              HOMOGENIZER
            </p>
            <p className="text-lg">
              Multistage, high-pressure homogenizers which are setting up the
              industry standards for aseptic and non aseptic processing.
              Equipment use in dairy, food, beverage, pharmaceutical, biotech,
              chemical, home and personal care products to improve their
              stability, consistency, shelf life and taste profile.
            </p>
            <p className="text-lg">
              Write to us your requirement at:info@fillaxo.com
            </p>
            <Button
              size="large"
              className="!bg-red-700 !text-white !w-fit !p-3"
            >
              Request Quote!
            </Button>
          </div>
          <div className="lg:w-[50%] ">
            <img src={homogenizer} alt="" className="h-[30rem]" />
          </div>
        </div>

        <div className="lg:flex-row-reverse flex p-2 flex-col-reverse lg:px-[12%] lg:justify-center lg:pt-10">
          <div className="lg:w-[50%]">
            <img src={pasterizer} alt="" className="h-[30rem]" />
          </div>
          <div className="lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]">
            <p className="font-sans text-red-600 text-2xl font-semibold">
              PASTEURIZER
            </p>
            <p className="text-lg">
              The pasteurization line is the heart of every food, dairy &
              beverage industry. It ensures the necessary heating holding
              process according to the product and the technological
              requirements respectively.
            </p>
            <p className="text-lg">
              Write to us your requirement at:info@fillaxo.com
            </p>
            <Button
              size="large"
              className="!bg-red-700 !text-white !w-fit !p-3"
            >
              Request Quote!
            </Button>
          </div>
        </div>

        <div className="lg:flex-row-reverse flex flex-col p-2 lg:px-[12%] lg:justify-center lg:pt-10">
          <div className="lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]">
            <p className="font-sans text-red-600 text-2xl font-semibold">
              SUGAR DISSOLVER
            </p>
            <p className="text-lg">
              A modern design which comes with hydraulic radial jet mixer (RJM)
              creates agitation inside the dissolving vessel without adding
              shear force to the sugar syrup. Inlet water will be preheated
              through external heat exchanger to dissolve high concentration
              (upto 70 Brix).
            </p>
            <p className="text-lg">
              Write to us your requirement at:service@fillaxo.com
            </p>
            <Button
              size="large"
              className="!bg-red-700 !text-white !w-fit !p-3"
            >
              Request Quote!
            </Button>
          </div>
          <div className="lg:w-[50%]">
            <img src={suger} alt="" className="h-[30rem]" />
          </div>
        </div>
        <div className="lg:flex-row-reverse flex flex-col-reverse lg:px-[12%] lg:justify-center lg:pt-10">
          <div className="lg:w-[50%]">
            <img src={mixing} alt="" className="h-[30rem]" />
          </div>
          <div className="lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]">
            <p className="font-sans text-red-600 text-2xl font-semibold">
              MIXING TANKS / STORAGE
            </p>
            <p className="text-lg">
              Application is in dairy, beverage and liquor industry for mixing
              and holding. These tanks are equipped with agitator mixers with
              low and high RMP to provide perfectly homogeneous mixing result.
              To perfect cleaning at the top and bottom these comes with CIP
              spray balls.
            </p>
            <p className="text-lg">
              Write to us your requirement at:service@fillaxo.com
            </p>
            <Button
              size="large"
              className="!bg-red-700 !text-white !w-fit !p-3"
            >
              Request Quote!
            </Button>
          </div>
        </div>
        <div className="lg:flex-row-reverse flex flex-col lg:px-[12%] p-2 lg:justify-center lg:pt-10">
          <div className="lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]">
            <p className="font-sans text-red-600 text-2xl font-semibold">
              CIP SYSTEM
            </p>
            <p className="text-lg">
              This is automatic cleaning system which ensures minimum downtime.
              Incorporated spray system, tank cleaners, nozzles to automate the
              cleaning process. Our CIP unit provide PLC based functionality for
              configurable recipes for water rinses, chemical washes and flow,
              pressure, concentration and temperature control.
            </p>
            <p className="text-lg">
              Write to us your requirement at:service@fillaxo.com
            </p>
            <Button
              size="large"
              className="!bg-red-700 !text-white !w-fit !p-3"
            >
              Request Quote!
            </Button>
          </div>
          <div className="lg:w-[50%]">
            <img src={cipsysterm} alt="" className="h-[30rem]" />
          </div>
        </div>
        <div className="lg:flex-row-reverse items-center lg:px-[12%] p-20 gap-5">
          <p className="text-lg">Do you want know more?</p>
          <button className="border h-11 w-40 bg-red-700 text-white rounded-md font-bold">
            → CONTACT US!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessEquipment;
