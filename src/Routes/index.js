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
        id: 6,
        path: "/aboutknowmore",
        element: <AboutKnowMore />,
    },
    {
        id: 6,
        path: "/joinus",
        element: <JoinUs />,
    },
    {
        id: 6,
        path: "/beverage",
        element: <Beverage />,
    },
    {
        id: 6,
        path: "/liquor",
        element: <Liquor />,
    },
    {
        id: 6,
        path: "/dairy",
        element: <Dairy />,
    },
]