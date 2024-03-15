import AboutUs from "../Componants/About_Us";
import KnowMore from "../Componants/Know_more";
import Service from "../Componants/Services";
import FrontPage from "../FrontPage";
import Header from "../Header";
import NavBar from "../NavBar";
import AboutKnowMore from "../Pages/AboutKnowMore";
import Beverage from "../Pages/Beverage";
import Dairy from "../Pages/Dairy";
import JoinUs from "../Pages/JoinUs";
import Liquor from "../Pages/Liquor";
import ML_Brick_1000 from "../Pages2/MlBrick1000";
import ProcessEquipment from "../Pages2/ProcessEquipment";
import Rotary from "../Pages2/RotaryFillers";
import Solution from "../Solution";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <FrontPage />,
  },
  {
    id: 2,
    path: "/header",
    element: <Header />,
  },
  {
    id: 3,
    path: "/navbar",
    element: <NavBar />,
  },
  {
    id: 4,
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    id: 5,
    path: "/service",
    element: <Service />,
  },
  {
    id: 6,
    path: "/contactus",
    element: <KnowMore />,
  },
  {
    id: 7,
    path: "/ml_brick_200",
    element: <AboutKnowMore />,
  },
  {
    id: 8,
    path: "/joinus",
    element: <JoinUs />,
  },
  {
    id: 9,
    path: "/beverage",
    element: <Beverage />,
  },
  {
    id: 10,
    path: "/liquor",
    element: <Liquor />,
  },
  {
    id: 11,
    path: "/dairy",
    element: <Dairy />,
  },
  {
    id: 12,
    path: "/ml_brick_1000",
    element: <ML_Brick_1000 />,
  },
  {
    id: 12,
    path: "/process_equipment",
    element: <ProcessEquipment />,
  },
  {
    id: 12,
    path: "/rotary",
    element: <Rotary />,
  },
  {
    id: 12,
    path: "/solution",
    element: <Solution />,
  },
];
