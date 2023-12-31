import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid"
import { VscCode, VscGithubInverted } from "react-icons/vsc";
import Link from "next/link"


const ProjectsCard = ({ imgUrl, title, description, gitUrl, viewUrl}: { imgUrl: string, title: string, description: string, gitUrl: string, viewUrl: string }) => {
    return (
        <div>
            <div className="h-52 md:h-96 rounded-t-xl relative group" style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
                <div className="overlay items-center justify-center absolute top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <VscGithubInverted className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                    </Link>
                    <Link href={viewUrl} className="h-14 w-14 ml-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                    </Link>
                </div>
            </div>
            <div className="rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">
                    {title}
                </h5>
                <p className="text-[#ADB7BE]">
                    {description}
                </p>  
            </div>
        </div>
    )
}

export default ProjectsCard