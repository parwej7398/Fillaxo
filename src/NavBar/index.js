import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-black  text-white">
      <div className="flex gap-5 lg:flex-row flex-col list-none lg:gap-[35%] p-10">
        <div className="flex gap-3 lg:flex-col lg:gap-20">
          <div className="lg:flex lg:gap-5 cursor-pointer">
            <Link to={"/aboutus"}>
              <li>ABOUT US</li>
            </Link>
            <Link to={"/solutions"}>
              <li>SOLUTIONS</li>
            </Link>
            <Link to={"/products"}>
              <li>PRODUCTS</li>
            </Link>
            <Link to={"/service"}>
              <li>SERVICE</li>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <button className="lg:text-lg">© Fillaxo 2024</button>
            </Link>
          </div>
        </div>
        <div className="flex lg:gap-40 gap-10">
          <div className="lg:flex lg:flex-col lg:gap-2 cursor-pointer">
            <li>Career</li>
            <li>Blog</li>
            <li>News & Events</li>
            <li>Contact</li>
          </div>
          <div className="lg:flex lg:flex-col gap-4 font-bold">
            <Link to={"/"}>
              <button className="lg:text-xl">Follow us</button>
            </Link>
            <div className="flex gap-2">
              <Link to="https://www.facebook.com/fillaxo">
                <IconButton>
                  <FacebookIcon className="!size-6 text-white" />
                </IconButton>
              </Link>
              <Link to="https://twitter.com/">
                <IconButton>
                  <TwitterIcon className="!size-6 text-white" />
                </IconButton>
              </Link>
              <Link to="https://www.linkedin.com/company/fillaxo">
                <IconButton>
                  <LinkedInIcon className="!size-6 text-white" />
                </IconButton>
              </Link>
              <Link to="https://www.instagram.com/fillaxo/">
                <IconButton>
                  <InstagramIcon className="!size-6 text-white" />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
