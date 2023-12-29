import Link from "next/link";

const NavbarLinks = ({ href, title }: { href: string, title: string }) => {
    return (
        <Link href={href} className="hover:text-slate-200 block py-2 pr-4">
            {title}
        </Link>
    )
}

export default NavbarLinks;
