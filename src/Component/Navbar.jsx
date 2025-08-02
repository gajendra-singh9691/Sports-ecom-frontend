import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faRunning,
    faUser,
    faShoppingBag,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ onOpen,fun,cartopen }) => {


    const nav = useRef()
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 50) {
                nav.current.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                nav.current.style.backgroundColor = "white";
                nav.current.style.position = "fixed";
            } else {
                nav.current.style.boxShadow = 'none';
                nav.current.style.backgroundColor = "transparent"
                nav.current.style.position = "static";
            }
        };
        window.addEventListener("scroll", handleScroll);


        return () => window.removeEventListener("scroll", handleScroll);
    },);

    const top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <nav className="bg-white shadow px-6 py-4 w-full z-60 duration-1000 select-none" ref={nav}>
            {/* Main container */}
            <div className="flex items-center justify-between">
                {/* Left: Hamburger (Mobile) */}
                <div className="flex gap-4 items-center">
                    <div onClick={onOpen}>
                        <button onClick={onOpen}
                            className=" text-2xl block sm:hidden text-black focus:outline-none cursor-pointer"
                            aria-label="Open Menu"
                        >
                            <FontAwesomeIcon icon={faBars} onClick={onOpen} />
                        </button>
                    </div>
                    <div className="hidden sm:flex items-center gap-8">
                        <Link onClick={top} to="/" className="text-black font-normal hover:text-gray-600">
                            Home
                        </Link>
                        <Link onClick={top} to="/shop" className="text-black font-normal hover:text-gray-600">
                            Shop
                        </Link>
                    </div>
                </div>


                {/* Center: Links and Logo (Hidden on mobile) */}
                <div className="flex items-center space-x-10 mx-auto">

                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faRunning} className="text-black text-xl" />
                        <span className="font-bold italic text-black   text-sm sm:text-xl md:text-2xl">yoursretrohubz</span>
                    </div>
                </div>

                {/* Right: User and Cart */}
                <div className="flex items-center space-x-6">
                    {/* <button className="text-2xl text-black hover:text-gray-600" aria-label="User">
            <FontAwesomeIcon icon={faUser} />
          </button> */}
                    <button className="text-2xl text-black hover:text-gray-600 cursor-pointer" aria-label="Cart" onClick={()=>fun(!cartopen)}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
