import React from "react";
import NavbarLinks from "./NavbarLinks";

interface Link {
    href: string;
    title: string;
}

const BurgerMenu = ({ links }: { links: Link[] }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavbarLinks href={link.href} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default BurgerMenu;