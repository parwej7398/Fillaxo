import React, { useState } from "react";
import falloxo from "../assest/fillaxo-grey.a0a349d4eda46249c900-removebg-preview.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Close, Menu, Search } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:flex lg:text-sm lg:font-semibold  hidden gap-4 pr-10 items-center list-none justify-end cursor-pointer">
        <Link to={"https://app.fillaxo.com/career/"}>
          <li className="hover:text-red-500">Career</li>
        </Link>
        <Link to={"https://app.fillaxo.com/blog/"}>
          <li className="hover:text-red-500">Blog</li>
        </Link>
        <Link to={"https://app.fillaxo.com/news/"}>
          <li className="hover:text-red-500">News & Events</li>
        </Link>
        <Link to={"/contactus"}>
          <li className="hover:text-red-500">Contact</li>
        </Link>
        <div className="lg:flex">
          <Link to="https://www.facebook.com/fillaxo">
            <IconButton>
              <FacebookIcon className="!size-5 !text-black" />
            </IconButton>
          </Link>
          <Link to="https://twitter.com/">
            <IconButton>
              <TwitterIcon className="!size-5 text-black" />
            </IconButton>
          </Link>
          <Link to="https://www.linkedin.com/company/fillaxo">
            <IconButton>
              <LinkedInIcon className="!size-5 text-black" />
            </IconButton>
          </Link>
          <Link to="https://www.instagram.com/fillaxo/">
            <IconButton>
              <InstagramIcon className="!size-5 text-black" />
            </IconButton>
          </Link>
        </div>
      </div>

      <div className="flex justify-between lg:pl-10 pl-3 lg:pr-20 pr-3 items-center text-center">
        <Link to="/">
          <img src={falloxo} alt="" className="lg:w-auto h-24" />
        </Link>

        <IconButton className="lg:!hidden" onClick={() => setOpen(true)}>
          <Menu />
        </IconButton>

        <Drawer
          className="lg:!hidden"
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <List>
            <ListItem className="!flex !justify-between gap-5">
              <TextField size="small" placeholder="Search Something..." />
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </ListItem>
            <Divider />
            <Link to="/aboutus" onClick={() => setOpen(false)}>
              <ListItemButton>About Us</ListItemButton>
              <Divider />
            </Link>
            <Accordion elevation={0}>
              <AccordionSummary>
                <p>Solution</p>
              </AccordionSummary>
              <AccordionDetails>
                <span className="flex flex-col gap-4">
                  <Link to="/dairy">
                    <p className="text-cyan-800" onClick={() => setOpen(false)}>
                      DAIRY
                    </p>
                  </Link>
                  <Link to="/beverage">
                    <p className="text-cyan-800" onClick={() => setOpen(false)}>
                      BEVERAGE
                    </p>
                  </Link>
                  <Link to="/liquor">
                    <p className="text-cyan-800" onClick={() => setOpen(false)}>
                      LIQUOR
                    </p>
                  </Link>
                </span>
              </AccordionDetails>
            </Accordion>

            <Accordion elevation={0}>
              <AccordionSummary>
                <p>Products</p>
              </AccordionSummary>
              <AccordionDetails className="!outline-none">
                <span className="flex flex-col gap-4">
                  <Link to="/ml_brick_200">
                    <p className="text-cyan-800" onClick={() => setOpen(false)}>
                      {" "}
                      200 ML BRICK
                    </p>
                  </Link>
                  <Link to="/ml_brick_1000">
                    <p className="text-cyan-800" onClick={() => setOpen(false)}>
                      1000 ML BRICK
                    </p>
                  </Link>
                  <Link to="/rotary">
                    <p className="text-cyan-800" onClick={() => setOpen(false)}>
                      ROTARY FILLERS
                    </p>
                  </Link>
                  <Link to="/process_equipment">
                    <p className="text-cyan-800" onClick={() => setOpen(false)}>
                      PROCESS EQUIPMENT
                    </p>
                  </Link>
                </span>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Link to="/service">
              <ListItemButton onClick={() => setOpen(false)}>
                Services
              </ListItemButton>
              <Divider />
            </Link>
            <Link to="https://app.fillaxo.com/career/">
              <ListItemButton>Career</ListItemButton>
              <Divider />
            </Link>
            <Link to="https://app.fillaxo.com/blog/">
              <ListItemButton>Blog</ListItemButton>
              <Divider />
            </Link>
            <Link to="https://app.fillaxo.com/news/">
              <ListItemButton>News & Events</ListItemButton>
              <Divider />
            </Link>
            <Link to="/contactus">
              <ListItemButton onClick={() => setOpen(false)}>
                Contact
              </ListItemButton>
              <Divider />
            </Link>
          </List>
        </Drawer>

        <div className="lg:flex hidden lg:text-base lg:font-medium items-center *:cursor-pointer gap-7 list-none text-red-600 text-xl">
          <Link to="/aboutus">
            <p>ABOUT US</p>{" "}
          </Link>
          <div className="flex flex-col relative py-5 group">
            <div className="cursor-pointer">SOLUTIONS</div>
            <div className="absolute top-16 text-left z-50 p-4 *:p-2 !text-xl !text-black border shadow bg-gray-300 hidden group-hover:block">
              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/dairy"}>
                  <p>DAIRY</p>
                </Link>
              </div>
              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/beverage"}>
                  <p>BEVERAGE</p>
                </Link>
              </div>
              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/liquor"}>
                  <p>LIQUOR</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative py-5 group">
            <div className="cursor-pointer">PRODUCTS</div>
            <div className="absolute top-16 z-50 p-4 !text-xl w-64 text-left *:p-2 !text-black border shadow bg-gray-300 hidden group-hover:block">
              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/aseptic_filler"}>
                  <p>ASEPTIC FILLER</p>
                </Link>
              </div>

              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/ml_brick_200"}>
                  <p>200 ML BRICK</p>
                </Link>
              </div>

              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/ml_brick_1000"}>
                  <p> 1000 ML BRICK</p>
                </Link>
              </div>

              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/rotary"}>
                  <p> ROTARY FILLERS</p>
                </Link>
              </div>

              <div className="cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <Link to={"/process_equipment"}>
                  <p>PROCESS EQUIPMENT</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link to="/service">SERVICES</Link>
          </div>
          <div className="flex items-center border rounded-xl h-10 ">
            <input type="search" placeholder="Search....." className="p-1" />
            <IconButton>
              <Search />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
