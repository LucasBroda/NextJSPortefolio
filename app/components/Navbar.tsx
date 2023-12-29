"use client"; // -> using it to avoid an error
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import BurgerMenu from "./BurgerMenu";

const NavLinks = [
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
        <nav className="fixed top-0 left-0 right-0 z-10 bg-neutral-900 bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-2xl sm:text-4xl text-white font-semibold">
                    Lucas Broda
                </Link>
                <div className="mobile block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )
                            
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="text-2xl sm:text-4xl flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                       {NavLinks.map((link, index) => (
                            <li key={index} className="">
                                <NavbarLinks href={link.href} title={link.title}/>
                            </li>
                        ))
                       }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <BurgerMenu links={NavLinks}/> : null}
        </nav>
    )
};

export default Navbar;
