import FrontPage from "../FrontPage";
import Header from "../Header";
import NavBar from "../NavBar";

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
]