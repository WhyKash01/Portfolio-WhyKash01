import React from "react";
import Image from "next/image";
import Link from "next/link";
import hello from "../../public/hello.png"
const HeroPage = () => {
  return (
    <div className=" bg-zinc-950 overflow-hidden px-[5vw] h-[95vh] flex flex-col lg:flex-row">
      <div className="mt-[25vh] z-50">
        <h2 className="text-xl flex mb-7 lg:text-4xl"><Image src={hello} className="w-20 h-20 relative -top-4 mr-5" ></Image> I'm <span className=" text-[#48C9B0] ml-3">Yash Kumar Singh </span> .</h2>
        <h1 className="text-3xl mb-10 lg:text-9xl">Full-Stack Devloper</h1>
        <h2 className="text-xl mb-20 font-[300] lg:text-3xl  w-[80%]">A student at ABV-IIIT Gwalior skilled in React, dedicated to delivering polished full-stark solutions that fuse functionality with aesthetics.</h2>
        <Link href={'/'} className="bg-[#48C9B0] hover:bg-[#1fb597] px-20 py-5 text-3xl font-[600] rounded-lg">Resume</Link>
      </div>
      <div className="z-50">
        <Image src="/main.png" className="mt-[15vh] rounded-full p-2 bg-gradient-to-t from-[#d0faf2] via-[#48C9B0] via-10% " width="1000" height="1000"></Image>
      </div>
      <div className="lg:w-[80vw] w-[120vw] h-[120vw] lg:h-[100vw] overflow-hidden bg-gradient-radial from-[#48c9af] opacity-30 backdrop-brightness-50 blur-lg md:top-[15vh] top-[15vh] left-[-10vw] md:left-[-10vw] lg:left-[-20vw] rounded-full  z-10 absolute">

      </div>
    </div>
  );
};

export default HeroPage;
