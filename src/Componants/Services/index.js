import React from "react";
import flexibal from "../../assest/flexibal.png";
import fillaxoss from "../../assest/download (1).png";
import { Button } from "@mui/material";
import sparepart from "../../assest/sparepart.png";
import maintenance from "../../assest/maintenance.png";
import modification from "../../assest/modification.png";
import training from "../../assest/training.png";
import productformulla from "../../assest/productformula.png";
import productsuport from "../../assest/productionsupport.png";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <div className="lg:flex-row-reverse flex flex-col">
        <div className="lg:w-[50%]">
          <img
            src={flexibal}
            alt=""
            className=" lg:h-[40rem] h-[20rem] w-full"
          />
        </div>
        <div className="lg:w-[50%] flex flex-col  max-lg:p-10 p-32  gap-5 lg:gap-4 bg-[#c71035] text-white lg:px-[12%]">
          <p className="underline text-lg">Service</p>
          <p className="lg:text-5xl text-2xl">
            ON TIME SERVICE TO MAXIMISE PRODUCTIVITY
          </p>
        </div>
      </div>
      <div className="lg:p-20 p-4 font-sans lg:text-xl lg:font-semibold text-slate-700 lg:px-[12%]">
        <p>
          Fillaxo offers the best-in-class service which cover 360-degree
          aspects of dairy, beverage and liquor production. We closely work with
          customers to better understanding their needs and offer them tailor -
          made trunkey solutions as well as 24 x 7 on time support. Our highly
          skilled team of engineers always available to increase productivity
          and operation cost reduction. Explore our company portfolio to get
          best plant & machinery as per your product need.
        </p>
      </div>

      <div>
        <img src={fillaxoss} alt="" className=" w-full lg:h-96" />
      </div>

      <div className="lg:flex-row-reverse flex items-center p-2 lg:px-[2%] flex-col lg:justify-center  ">
        <div className="lg:w-[50%]">
          <img src={sparepart} alt="" />
        </div>
        <div className="flex p-2 flex-col lg:p-10 lg:gap-4 gap-3 lg:w-[50%]">
          <p className="font-sans text-red-700 lg:text-3xl text-xl font-bold">
            Spare - part
          </p>
          <p className="lg:text-xl">
            Fillaxo always considers high quality brought out items for its
            machinery. A wide range of original spare parts are always immediate
            ready to dispatch to our customer just on call or email.
          </p>
          <p className="lg:text-xl">
            Our specialization not just limited to any particular area we are
            serving throughout the world and providing wide range of spare parts
            and services at doorstep.
          </p>
          <p className="lg:text-xl">
            Write to us your requirement at: service@fillaxo.com
          </p>
          <Button size="large" className="!bg-red-700 !text-white !w-fit !p-3">
            Your Query
          </Button>
        </div>
      </div>

      <div className="lg:flex-row-reverse items-center flex flex-col-reverse lg:px-[2%] gap-3 pt-4 lg:justify-center p-2">
        <div className="lg:flex flex flex-col gap-4 lg:flex-col lg:p-10 lg:gap-4 lg:w-[50%]">
          <p className="font-sans text-red-700 lg:text-3xl text-xl font-bold">
            Maintenance service or AMC
          </p>
          <p className="lg:text-xl">
            To achieve high level of efficiency, low downtime and low production
            costs, we always recommend our customers to take of regular
            machinery maintenance or AMC.
          </p>
          <p className="lg:text-xl">
            Fillaxo allow customers to build suitable maintenance contracts to
            fir as per needs. AMC offers headache free maintenance of machinery
            efficiently and on time.
          </p>
          <p className="lg:text-xl">
            Write to us your requirement at: service@fillaxo.com
          </p>
          <Button size="large" className="!bg-red-700 !text-white !w-fit !p-3">
            Your Query
          </Button>
        </div>

        <div className="lg:w-[50%] ">
          <img src={maintenance} alt="" />
        </div>
      </div>

      <div className="lg:flex-row-reverse flex p-2 flex-col items-center-reverse gap-2  lg:justify-center lg:px-[2%] ">
        <div className="lg:w-[50%]">
          <img src={modification} alt="" />
        </div>
        <div className="flex flex-col lg:p-10  gap-4 lg:w-[50%]">
          <p className="font-sans text-red-700 text-2xl font-bold">
            Modification
          </p>
          <p className="lg:text-xl">
            Our machinery comes with upgradation feature through this feature we
            can modify our most of machinery in terms of flow, size and control
            system upgrade.
          </p>
          <p className="lg:text-xl">
            To extend the life of equipment and performance improvement, Fillaxo
            recommend technical modification and upgrade of machinery time to
            time. Our machinery is distinguishing itself through durability and
            simple in use.
          </p>
          <p className="lg:text-xl">
            Write to us your requirement at:service@fillaxo.com
          </p>
          <Button size="large" className="!bg-red-700 !text-white !w-fit !p-3">
            Your Query
          </Button>
        </div>
      </div>

      <div className="lg:flex-row-reverse items-center flex flex-col-reverse gap-3 p-2 lg:justify-center lg:px-[2%] ">
        <div className="flex flex-col lg:p-10 gap-4 lg:w-[50%]">
          <p className="font-sans text-red-700 text-2xl font-bold">Training</p>
          <p className="lg:text-xl">
            Every product having its own characteristic and to achieve those
            characteristic operators of customers need to be train properly. We
            always design our training program as per specific customer needs to
            support customers operations.
          </p>
          <p className="lg:text-xl">
            Through proper training program operators can increase productivity,
            reduction in operating costs and enhanced product quality
          </p>
          <p className="lg:text-xl">
            Write to us your requirement at: service@fillaxo.com
          </p>
          <Button size="large" className="!bg-red-700 !text-white !w-fit !p-3">
            Your Query
          </Button>
        </div>
        <div className="lg:w-[50%]">
          <img src={training} alt="" />
        </div>
      </div>

      <div className="lg:flex-row-reverse items-center flex flex-col lg:justify-center lg:px-[2%] ">
        <div className="lg:w-[50%]">
          <img src={productformulla} alt="" />
        </div>
        <div className="flex flex-col lg:p-10 gap-4 p-2 lg:w-[50%]">
          <p className="font-sans text-red-700 text-2xl font-bold">
            Product formulation
          </p>
          <p className="lg:text-xl">
            We having a dedicated department for product formulation or recipe
            development. Our product development specialists are masers in food
            science / technologies and have several years of experience in NPD.
          </p>
          <p className="lg:text-xl">
            Having the following product development capabilities: Juices, CSD,
            Energy drink, Dairy product such as flavored milk, yoghurt and in
            alcoholic such as beer, wine, cocktails etc.
          </p>
          <p className="lg:text-xl">
            Write to us your requirement at: service@fillaxo.com
          </p>
          <Button size="large" className="!bg-red-700 !text-white !w-fit !p-3">
            Your Query
          </Button>
        </div>
      </div>

      <div className="lg:flex-row-reverse flex flex-col-reverse items-center gap-3 p-2 lg:justify-center lg:px-[2%] ">
        <div className="flex flex-col lg:p-10 p-2 gap-4 lg:w-[50%]">
          <p className="font-sans text-red-700 text-2xl font-bold">
            Production support
          </p>
          <p className="lg:text-xl">
            Fillaxo always do extra efforts for customers which aimed at
            increasing the internal skills of client's operation staff through
            that operation staff actually get knowledge about correct product
            manufacturing process
          </p>
          <p className="lg:text-xl">
            Apart from this for on gong operations we are providing remote
            assistance services through this we are minimizing downtime of plant
            & machinery.
          </p>
          <p className="lg:text-xl">
            Write to us your requirement at: service@fillaxo.com
          </p>
          <Button size="large" className="!bg-red-700 !text-white !w-fit !p-3">
            Your Query
          </Button>
        </div>
        <div className="lg:w-[50%]">
          <img src={productsuport} alt="" />
        </div>
      </div>
      <Link to={"/contactus"}>
        <div className="flex items-center lg:p-20 p-7 gap-6 lg:px-[12%]">
          <p className="lg:text-xl">Do you want know more?</p>
          <button className="border h-11 w-40 bg-red-700 text-white rounded-md font-bold">
            → CONTACT US!
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Service;
