import React from "react";
import joinus from "../../assest/joinus.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div>
      <div>
        <div className="lg:flex max-sm:flex max-sm:flex-col-reverse">
          <div className="lg:w-[50%] lg:flex lg:flex-col lg:gap-8 bg-[#c71035] text-white lg:p-20 p-10">
            <p className="underline lg:text-2xl">Career</p>
            <p className="lg:text-5xl text-2xl">
              CREATE DIFFERENCE WITH FILLAXO
            </p>
          </div>
          <div className="lg:w-[50%]">
            <img src={joinus} alt="" className="lg:h-[20rem] w-full" />
          </div>
        </div>
        <div className="lg:px-[20%] p-10">
          <div className="lg:flex  lg:flex-col  lg:gap-4">
            <p className="lg:text-2xl text-xl text-red-800 p-2  font-semibold">
              Positions
            </p>
            <p className="lg:text-3xl text-xl p-2 text-red-800">
              Search for current vacancies and apply here.
            </p>
            <hr />
          </div>

          <div className="flex flex-col border-2   rounded border-red-800 gap-5 p-4">
            <div className="flex justify-between shadow-lg shadow-red-100  items-center border-2 rounded-md">
              <div className="flex flex-col gap-2 lg:p-10 p-2">
                <p className="text-red-800 text-lg font-medium">
                  Post: Inside Sales Representative
                </p>
                <p>Experience: 1-2 Year</p>
                <p>Gender: Male / Female</p>
                <p>Location: New Delhi</p>
              </div>
              <div className="border rounded-md bg-red-800 lg:mr-5">
                <Button className="!text-white">Apply Now</Button>
              </div>
            </div>
            <div className="flex justify-between shadow-xl shadow-red-50 items-center border-2">
              <div className="flex flex-col gap-2 lg:p-10 p-2">
                <p className="text-red-800 text-lg font-medium">
                  Post: Digital Marketing Manager
                </p>
                <p>Experience: 1-2 Year</p>
                <p>Gender: Male / Female</p>
                <p>Location: New Delhi</p>
              </div>
              <div className="border rounded-md bg-red-800 lg:mr-5">
                <Button className="!text-white">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2 p-2 lg:px-[20%]">
          <p className="lg:text-3xl lg:pt-2 text-red-800 text-xl ">
            General Form
          </p>
          <input
            type="text"
            placeholder="Name"
            className="border  lg:h-10 p-2"
          />
          <input
            type="text"
            placeholder="Surname"
            className="border  lg:h-10 p-2"
          />
          <input
            type="number"
            placeholder="Contect no"
            className="border  lg:h-10 p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border  lg:h-10 p-2"
          />
          <input
            type="text"
            placeholder="Country"
            className="border  lg:h-10 p-2"
          />
          <input
            type="text"
            placeholder="Role"
            className="border  lg:h-10 p-2"
          />
          <div>
            <p className="  lg:h-10 p-2">
              <span className="text-red-500">Upload files:</span> PDF, DOC
            </p>
            <input
              type="file"
              name="filename"
              id="myFile"
              className="border  lg:h-12 p-2"
            />
          </div>
          <button
            type="submit"
            className="border h-9 bg-red-600 text-white lg:w-32 rounded-lg left-2"
          >
            Submit
          </button>
        </div>
        <div className="lg:flex lg:justify-between lg:px-[20%]">
          <div className="flex flex-col gap-4  p-5">
            <p className="text-2xl text-red-600"> About Fillaxo</p>
            <p className="text-lg text-red-600">
              Read more about us, our goals and responsibilities
            </p>
            <Link to="/aboutus">
              <p className=" text-red-600">⇨</p>
            </Link>
          </div>
          <div className="flex flex-col gap-4 p-5">
            <p className="text-2xl text-red-600">Latest news</p>
            <p className="text-lg text-red-600">
              Take a look at what we have been up to lately
            </p>
            <Link to="/aboutus">
              <p className=" text-red-600">⇨</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
