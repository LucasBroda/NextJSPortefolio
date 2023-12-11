"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";

const links = [
    {
        href: "#about",
        title: "About"
    },
    {
        href: "#skills",
        title: "Skills"
    },
    {
        href: "#projects",
        title: "Projects"
    },
    {
        href: "#contact",
        title: "Contact"
    }
]


export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-2xl sm:text-4xl text-white font-semibold">
                    Lucas Broda
                </Link>
                <div className="mobile block md:hidden">
                    {
                        navbarOpen ? (
                            
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="text-2xl sm:text-4xl flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                       {
                        links.map((link, index) => (
                            <li key={index} className="">
                                <NavbarLinks href={link.href} title={link.title}/>
                            </li>
                        ))
                       }
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
