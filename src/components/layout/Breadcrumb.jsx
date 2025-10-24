import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
<section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-[90px] pb-6 bg-[rgb(242,245,241)] w-full border-b border-gray-200">
            <div className="text-sm md:text-base font-poppins text-gray-700 w-full text-left">
                <Link to="/" className="hover:underline text-gray-700">
                    Home
                </Link>

                {pathnames.map((name, idx) => {
                    const routeTo = `/${pathnames.slice(0, idx + 1).join("/")}`;
                    const isLast = idx === pathnames.length - 1;

                    return (
                        <span key={idx}>
                            {" > "}
                            {isLast ? (
                                <span className="text-black">
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </span>
                            ) : (
                                <Link to={routeTo} className="hover:underline text-gray-700">
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </div>
        </section>
    );
};

export default Breadcrumb;

