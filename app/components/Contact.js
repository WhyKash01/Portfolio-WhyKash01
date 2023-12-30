"use client";
import Linkedin from './../../public/Linkedin1.png'
import github from './../../public/github.png'
import React from "react";
import Image from "next/image";
import { useState } from "react";
function Contact() {
  let initialState = {
    preson: "",
    emailName: "",
    message: "",
  };
  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initialState);
  };
  let handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <div id="Contact" className="2xl:h-[100vh] w-[100%] 2xl:py-32 xl:py-20 py-12 bg-zinc-950">
      <h1 className="text-center 2xl:text-7xl xl:text-6xl lg:text-7xl md:text-5xl text-4xl my-5">Let's Chat</h1>
      <h2 className="text-center 2xl:text-2xl xl:text-xl lg:text-3xl md:text-xl font-[400]">itsyash9211@gmail.com</h2>
      <div className="flex flex-col xl:flex-row 2xl:mx-32 xl:mx-14 mx-auto items-center justify-center xl:my-20 my-10 2xl:gap-32 xl:gap-16 gap-10">
        <div className=" bg-zinc-800 2xl:lg:px-16 xl:lg:px-10 lg:px-16 px-5 2xl:w-[35vw] xl:w-[45vw] w-[80vw] 2xl:py-20 xl:py-16 lg:py-20 py-10 rounded-lg border-[#48C9B0] border">
          <h1 className=" 2xl:text-6xl xl:text-4xl lg:text-5xl md:text-2xl text-xl">Yash Kumar Singh</h1>
          <h3 className=" 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-lg font-[400] 2xl:mt-5 xl:mt-2 lg:mt-5 mt-1">Graduation Year - 2026</h3>
          <h3 className=" 2xl:text-2xl xl:text-xl lg:text-3xl md:text-lg font-[400] 2xl:mt-16 lg:mt-10 mt-5">I'm a sophomore at <span className="font-[600] text-[#48C9B0]" >IIIT Gwalior</span> pursuing BTech in Information Technology. I have my expertise in web development, especially with the <span className="font-[600] text-[#48C9B0]"> MERN stack</span>.</h3>
          <h3 className=" 2xl:text-2xl xl:text-xl lg:text-3xl md:text-lg font-[400] xl:mt-5 lg:mt-5 mt-1">I'm always ready to have new experiences, meet new people and work in the latest fast paced environments.</h3>
          <div className="2xl:mt-10 xl:mt-5 lg:mt-10 mt-3 flex lg:gap-8 gap-5">
            <Image src={Linkedin} className='2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 cursor-pointer'></Image>
            <Image src={github} className='2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 cursor-pointer '></Image>
          </div>
        </div>
        <div className=" xl:w-[55vw] grid grid-cols-1 justify-items-center w-[80vw] bg-zinc-800 2xl:py-20 lg:py-20 py-10 px-auto border border-[#48C9B0] rounded-lg shadow-lg shadow-black/50 ">
          <h1 className=" md:text-4xl lg:text-6xl 2xl:text-6xl xl:text-5xl text-3xl lg:mb-12 md:mb-8 mb-5 ">
            Let's get in touch
          </h1>
          
          <form action="" className="">
            <div className="xl:w-[40vw] w-[70vw] flex flex-col xl:flex-row xl:mb-[0vw] mb-3 md:mb-5  lg:mb-[1vw] justify-between">
              <input
                onChange={handleChange}
                type="text"
                value={data.preson}
                name="preson"
                placeholder="Name"
                className="lg:pl-[2vw] pl-5 placeholder:text-[#48C9B0] md:mb-5 2xl:text-2xl xl:text-xl lg:text-3xl md:text-xl lg:py-[1.5vh] md:py-4 py-[1vh] text-white rounded-sm lg:rounded-md bg-zinc-950 xl:w-[19vw] lg:mb-[2vw] mb-3  "
              />
              <input
                onChange={handleChange}
                type="email"
                value={data.emailName}
                name="emailName"
                className="lg:pl-[2vw] pl-5 placeholder:text-[#48C9B0] 2xl:text-2xl xl:text-xl lg:text-3xl md:text-xl lg:py-[1.5vh] py-[1vh] md:py-4 text-white rounded-sm lg:rounded-md bg-zinc-950 xl:w-[19vw] lg:mb-[2vw] "
                placeholder="Email"
                id=""
              />
            </div>
            <div className="">
              <input
                name="message"
                value={data.message}
                onChange={handleChange}
                type="text"
                className=" xl:w-[40vw] 2xl:text-2xl xl:text-xl w-[70vw] lg:pl-[2vw] pl-5 placeholder:text-[#48C9B0] lg:text-3xl lg:pt-5 xl:pb-16 lg:pb-20 md:pt-4 md:pb-14 pb-10 md:text-xl pt-[1vh] text-white rounded-sm xl:rounded-md bg-zinc-950 lg:mb-0"
                placeholder="Any message"
              />
            </div>
            
          </form>
          <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-[#48C9B0] md:text-xl hover:bg-[#1fb597] xl:rounded-md rounded-sm 2xl:text-3xl xl:text-2xl lg:text-3xl text-white lg:py-[1vh] md:py-3 py-[1vw] shadow-black shadow-sm xl:w-[15vw] lg:w-[25vw] w-[35vw] xl:mt-[2vw] lg:mt-10 mt-5 xl:items-center"
            >
              Send
            </button>
        </div>
      </div>

    </div>
  );
}

export default Contact;
