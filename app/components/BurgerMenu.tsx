import React from "react";
import NavbarLinks from "./NavbarLinks";

const BurgerMenu = ( links ) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            <li key={index}>
                {links.map((link, index) => (
                <NavbarLinks  href={link.href} title={link.title} />
                ))}
            </li>
        </ul>
    )
}

export default BurgerMenu;