import React from "react";
import gril from "../assest/gril.png";
import download from "../assest/download.jpeg";
import imagess from "../assest/images.jpeg";
import man from "../assest/man.jpg";
import green from "../assest/green.png";
import medicine from "../assest/medicn.png";
import ken from "../assest/kan.png";
import milk from "../assest/milk.png";
import { Link } from "react-router-dom";
import fillaxosss from ".././assest/download (1).jpeg";
import fillaxo from "../assest/Screenshot_2024-03-15_145505-removebg-preview.png";

const FrontPage = () => {
  return (
    <>
      <div className="min-h-screen lg:block hidden">
        <div className="absolute -z-10 min-w-[104%] -ml-16">
          <video
            autoPlay
            muted
            loop
            id="bg-video"
            className="min-w-[104%] max-h-screen object-cover -ml-16"
          >
            <source src="https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Small-size.mp4" />
          </video>
        </div>
        <div className="relative flex flex-col gap-5 pt-60 pl-60 text-white">
          <p className="text-6xl font-bold">WE'RE FILLAXO</p>
          <div>
            <p className="text-4xl font-semibold">
              Turnkey solution provider for
            </p>
            <p className="text-4xl font-semibold">
              aseptic and non - aseptic filling and
            </p>
            <p className="text-4xl font-semibold">processing</p>
          </div>
          <Link to="/contactus">
            <button className="border p-2 text-red-700 border-red-700 font-semibold w-32 bg-white rounded-full italic">
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="absolute -z-10 min-w-[104%] -ml-16">
          <img src={fillaxosss} alt="" className="w-[30rem] h-72" />
        </div>
        <div className="relative  text-white flex flex-col lg:gap-5 lg:pt-60 lg:pl-60 pl-7 gap-4 left-12 p-10">
          <div className="flex gap-5 items-center">
            <div>
              <img src={fillaxo} alt="" className="h-60" />
            </div>
            <div className="flex flex-col items-center">
              <div>
                <p className="text-3xl  font-bold ">Great</p>
                <p className="text-3xl  font-bold ">Packing</p>
                <p className="text-3xl  font-bold ">For</p>
                <p className="text-3xl  font-bold ">Future</p>
              </div>

              <Link to="/contactus">
                <button className="border p-2 text-red-600 border-red-600 lg:w-32 bg-white rounded-full italic">
                  LEARN MORE !
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col max-lg:border max-lg:bg-slate-100 max-lg:px-[10%] mt-6  justify-center p-5 lg:pt-20">
        <div className="lg:w-[40%]">
          <img src={gril} alt="" />
        </div>
        <div className="lg:w-[40%] mt-3 border-collapse lg:h-[23.2rem] bg-slate-100 flex flex-col lg:gap-5 lg:p-0 p-4 justify-center">
          <p className="text-4xl text-blue-800 font-extrabold">
            INNOVATIVE <br /> UNDERSTANDING
          </p>
          <p className="max-lg:text-sm">
            Our innovative & unique technologies enable us to provide complete
            range including aseptic carton packing filling machines & process
            turnkey solutions to beverage, dairy, food & liquor industries.
          </p>
          <Link to="/aboutknowmore">
            <button className="text-left text-red-700 font-bold">
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>

      <div className="flex lg:flex-row max-lg:border max-xl:mt-4 max-xl:bg-slate-100 flex-col gap-10 justify-center p-5">
        <div className="lg:w-[30%]">
          <div className="absolute">
            <img src={download} alt="" className="w-[28rem] h-[16rem]" />
          </div>
          <div className=" relative lg:ml-5 lg:mr-5 flex flex-col gap-2 mt-[14rem] bg-slate-200 border-collapse lg:h-[15rem] p-5">
            <p className="text-2xl max-lg:text-red-700 font-bold lg:text-center">
              BEVERAGE TECHNOLOGIES AND INNOVATION?
            </p>
            <p className="max-lg:text-sm">
              Globally thirst for commercial beverages continuous to grow and we
              have unique and affordable solution to meet individual beverage
              producer.
            </p>
            <Link to="/beverage">
              <button className="text-left underline text-red-700 font-bold">
                KNOW MORE
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-[30%] ">
          <div className="absolute">
            <img src={man} alt="" className="w-[28rem] h-[16rem]" />
          </div>
          <div className=" relative lg:ml-5 lg:mr-5 flex flex-col gap-2 mt-[14rem] bg-slate-200 border-collapse lg:h-[15rem] p-5">
            <p className="text-2xl font-bold max-xl:text-red-700 lg:text-center">
              PERFECT PACKAGE FOR DAIRY?
            </p>
            <p className="max-lg:text-sm">
              Challenge for dairy industry is long shelf life of products
              without compromising the nutrients but solution should be
              sustainable and affordable to become comitative in market.
            </p>
            <Link to="/dairy">
              <button className="text-left underline text-red-700 font-bold">
                KNOW MORE
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-[30%]">
          <div className="absolute">
            <img src={imagess} alt="" className="w-[28rem] h-[16rem]" />
          </div>
          <div className=" relative lg:ml-5 lg:mr-5 flex flex-col gap-2 mt-[14rem] bg-slate-200 border-collapse lg:h-[15rem] p-5">
            <p className="text-2xl font-bold max-lg:text-red-700 lg:text-center">
              NEW ERA OF FOOD HABITS?
            </p>
            <p>
              Ready to partner with customers for affordable aluminum canning
              opportunities for performing better and growing faster in an
              ever-changing liquor market throughout the world.
            </p>
            <Link to="/liquor">
              <button className="text-left underline text-red-700 font-bold">
                KNOW MORE
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row max-lg:border max-xl:mt-4 max-xl:bg-slate-100 flex-col-reverse justify-center p-10">
        <div className="lg:w-[40%] p-5 mt-3 border-collapse h-[360px] bg-slate-100 flex flex-col gap-5 justify-center">
          <p className="text-4xl text-blue-800 font-bold">
            CREATING ENVIROMENTAL SUSTANIBILTY
          </p>
          <p>
            Committed to monitoring and reducing the environmental impacts of
            its production as well as developing products that are energy
            efficient, use fewer raw materials, are more economic and easier to
            use to our clients.
          </p>
          <Link to="/joinus">
            <button className="text-left underline text-red-700 font-bold">
              JOIN US
            </button>
          </Link>
        </div>
        <div className="lg:w-[40%]">
          <img src={green} alt="" className="h-96" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col max-lg:border max-xl:mt-4 max-xl:bg-slate-100 justify-center items-center gap-5">
        <div className="border h-[25rem] bg-slate-100 lg:w-[30%]">
          <div className="flex flex-col lg:gap-5">
            <img src={medicine} alt="" />
            <p className="text-lg text-red-700 font-extrabold p-5">
              TOP REASONS TO GO FOR ASEPTIC CARTON
            </p>
            <p className="text-left lg:text-red-700 font-bold underline p-5">
              DISCOVER MORE!
            </p>
          </div>
        </div>
        <div className="border h-[25rem] bg-slate-100 lg:w-[30%]">
          <div className="flex flex-col lg:gap-5">
            <img src={ken} alt="" />
            <div className="flex flex-col">
              <p className="text-lg text-red-700 font-extrabold p-5">
                HOW CONSUMERS PREFERENCE FOR <br />
                ALUMINIUM CANS
              </p>
              <p className="text-left lg:text-red-700 font-bold underline p-5">
                DISCOVER MORE!
              </p>
            </div>
          </div>
        </div>
        <div className="border h-[25rem] bg-slate-100 lg:w-[30%]">
          <div className="flex flex-col lg:gap-5">
            <img src={milk} alt="" />
            <p className="text-lg text-red-700  font-extrabold p-5">
              ADVANTAGES OF UHT TREATED MILK
            </p>
            <p className="text-left lg:text-red-700 font-bold underline p-5">
              DISCOVER MORE!
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex max-lg:flex max-lg:flex-col items-center   p-20 gap-5">
        <p className="text-lg">Do you want know more?</p>
        <Link to="/contactus">
          <button className="border h-11 w-40 bg-red-700 text-white rounded-md font-bold">
            → CONTACT US!
          </button>
        </Link>
      </div>
    </>
  );
};

export default FrontPage;
