"use client"
import Image from "next/image";
import React, {useTransition, useState} from "react";
import TabButton from "./TabButton";

const AboutMe = () => {
    const[tabs, setTabs] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleChange = (id) => {
        startTransition(() => {
            setTabs(id);
        });
    }

    return (
        <section className="text-white mt-28" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
                <Image src="/IMAGE.jpg" width={500} height={500} alt="Basic Image"></Image>
                <div>
                    <p className="mt-12">
                    My name is Lucas Broda, I'm 20 years old and I'm a third-year computer science student at the IUT in Lens.<br/>
                    I'm a native of the Lille area, where I spent part of my schooling (Marcq En Baroeul to be precise).<br/>
                    I did a general baccalaureate (which I passed with an "Assez Bien" distinction), <br/>where, at the time, I chose mathematics, physics-chemistry and computer science as optional subjects,<br/>
                    which is where my choice to pursue higher education in computer science comes from.<br/>
                    I'm an avid sportsman who loves to excel on a daily basis, having played handball for 12 years, as well as karate, judo and swimming.<br/>
                    I'm also a perfectionist who loves to improve and learn new things, particularly in the field of IT.
                    I like watching videos about new technologies/new frameworks, and I also like doing small projects to improve or train myself!
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleChange("skills")} active={tabs === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleChange("experience")} active={tabs === "experience"}>Experience</TabButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;