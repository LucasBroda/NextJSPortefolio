import Link from "next/link";

const NavbarLinks = ({ href, title }) => {
    return (
        <Link href={href} className="text-white hover:text-slate-200 block py-2 pr-4">
            {title}
        </Link>
    )
}

export default NavbarLinks;
