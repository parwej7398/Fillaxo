import React from "react";
import Beverages from "../../assest/beverage.png";
import { Link } from "@mui/material";

const Beverage = () => {
  const products = [
    {
      id: 1,
      image:
        "https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Juice.jpg",
      title: "Juice (RTS / RTD)",
      contect:
        "Innovation & unique designing, supply, erection, installation & commissioning of turnkey projects for RTS/RTD beverage.",
    },
    {
      id: 2,
      image:
        "https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/CSD.jpg",
      title: "CSD & Energy drink",
      contect:
        "Complete expertise in any kind of packing - glass, pet & can. Expertise solution got smooth processing and filling of CSD & energy drink.",
    },
    {
      id: 3,
      image:
        "https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Tea+%26+Coffee.jpg",
      title: "Tea & Coffee",
      contect:
        "Advanced processing and filling machinery for ready-to-serve carbonated / non - carbonated tea & coffee.",
    },
    {
      id: 4,
      image:
        "https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Technical+services.jpg",
      title: "Fillaxo technical services",
      contect:
        "Dedicated team fully trained engineers to maintain our plant & machinery  ➔",
    },
    {
      id: 5,
      image:
        "https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Concentrate+%26+Syrup.jpg",
      title: "Concentrate & syrups",
      contect:
        "Futuristic innovative technology including evaporation unit to process and fill concentrate and syrup in pet or glass bottles.",
    },
    {
      id: 6,
      image:
        "https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Water.jpg",
      title: "Water",
      contect:
        "Flavored, still, sparkling or infused we have complete range of reliable and consistent technological solution.",
    },
  ];
  return (
    <div>
      <div className="lg:flex max-lg:flex max-lg:flex-col-reverse">
        <div className="lg:w-[50%] lg:flex lg:flex-col  gap-8 bg-[#c71035] text-white p-20">
          <p className="underline font-semibold text-lg">Beverage</p>
          <p className="lg:text-5xl text-2xl">A TRUE HACK FOR AMAZING TASTE</p>
        </div>
        <div className="lg:w-[50%]">
          <img src={Beverages} alt="" className="lg:h-[20rem] h-52" />
        </div>
      </div>
      <div className="lg:flex lg:flex-col bg-gray-100 lg:gap-5 lg:p-10 p-4">
        <p className="lg:text-xl">
          Beverage processing companies are facing numerous challenges which are
          cost of raw materials, ingredients, correct taste profile and break
          down. Apart from this delivering premium quality low priced drink to
          demanding consumers is a biggest challenge.
        </p>
        <p className="lg:text-5xl text-xl text-red-700 font-bold">
          Complete turnkey projects
        </p>
        <p className="lg:text-xl">
          Filllaxo machinery and equipments comply with international quality
          and hygiene standards. But we not only supply equipment, we take care
          for each step from scratch to commissioning. Our equipment and fillers
          can help you to reduce operating and maintenance cost. Our innovative
          and unique upgraded technologies also help to safe guard the
          environment through minimization of water, emission and energy use.
          Talk to our Fillaxo adviser to decide correct technology for your
          product.
        </p>
      </div>
      <div>
        <div className="p-6 sm:py-12 bg-gray-100 text-gray-800">
          <div className=" grid lg:grid-col-3 lg:px-[10%] lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((event) => (
              <div key={""} className="flex flex-col mt-5">
                <img alt="" className=" bg-gray-500 " src={event.image} />
                <div className="flex flex-col gap-1 p-2">
                  <p className="lg:text-3xl text-xl text-red-700 font-semibold">
                    {event.title}
                  </p>
                  <p className="lg:text-lg">{event.contect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="h-80 flex justify-center items-center text-center"
        style={{
          backgroundImage: `url('https://www.workinsync.io/wp-content/uploads/2023/02/Hybrid-Workplace-Is-The-Future-Here-Today_.jpg')`,
        }}
      >
        <Link top={"/contactus"}>
          <button className="border p-4 text-white font-semibold rounded-md hover:text-yellow-600 bg-red-700">
            Book a meeting Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Beverage;
