import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-12 mt-16' >
        <div className="col-span-7 place-self-center text-center sm:text-left ">
            <h1 className=' text-white mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                Hello,<br/> I'm Lucas Broda
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 '>
                I'm a 20-year-old French student in my 3rd year<br/>
                of Computer Science degree at the IUT in Lens.<br/>
                
            </p>
        </div>
        <div className="col-span-5 place-self-center mt-20 lg:mt-0 sm: ml-8">
            <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                <Image className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/LucasB.jpg" alt="Picture of my self" width={300} height={500}/>
            </div>
        </div>
    </div>
  )
};

export default Header;
