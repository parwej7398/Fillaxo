import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {

    const navItems = [
        {
            id: 1,
            to: "/blog",
            navItem: "Blog",
        },

    ];
    return (
        <div className="flex flex-col h-fit">
            {/* Header */}
            <div className="p-2 text-white flex gap-6 bg-black">
                {navItems.map((nav, index) => {
                    const isActive = window.location.pathname === nav.to;
                    console.log(isActive, index);
                    return (
                        <Link key={nav.id} to={nav.to} className={classNames("p-2 hover:bg-blue-300 rounded-xl", isActive && "bg-blue-500")}>
                            {nav.navItem}
                        </Link>
                    );
                })}
            </div>
            <div className="flex h-full">
                <div></div>
                <div className="w-full">{children}</div>
            </div>
            {/* Footer  */}
            <div className="bg-black text-white p-2">Footer</div>
        </div>
    );
};

export default Layout;
