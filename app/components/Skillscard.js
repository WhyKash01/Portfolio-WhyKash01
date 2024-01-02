import React from "react";
import Image from "next/image";
import react from "./../../public/atom.png"
const Skillscard = (props) => {
  return (
    <div className="lg:px-5 lg:py-5 px-3 py-2 rounded-md flex text-Left hover:bg-zinc-700 cursor-pointer">
        <Image src={props.Image} className="md:w-14 md:h-14 w-10 h-10 my-auto" ></Image>
        <div className="ml-5">
            <h3 className="lg:text-lg md:text-2xl  text-sm">{props.title}</h3>
            <h3 className="line-clamp-2 xl:text-sm md:text-lg sm:text-lg text-xs lg:mt-1 mt-0 font-[400] text-zinc-300">
                {props.des}
            </h3>
        </div>
    </div>
  );
};

export default Skillscard;
