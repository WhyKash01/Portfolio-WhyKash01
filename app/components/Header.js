'use client'

import React from "react";
import Image from "next/image";
// import './Header.css';
import logo from '../../public/logo.png'
function Header() {
  const navlinks = [
    {
      title: "Home",
      url: "/",
      isActive: true,
    },
  ];
  return (
    <>
      <div className="Header border-b border-b-[#48c9af60] flex bg-zinc-950 justify-between px-[5vw] py-[2vh] w-[100%]">
        <div className="flex gap-1">
          <Image src={logo} className=" w-[5vh]"></Image>
          <h2 className="text-[#48C9B0] text-3xl font-[600] my-auto"> WhyKash</h2>
        </div>
        <div className="headerButton hover:cursor-pointer hidden md:flex  gap-20 justify-end lg:w-[40vw] md:w-[50vw] items-center text-white">
          <a href="/">
            <h1 className=" lg:text-3xl md:text-2xl first-line: hover:text-[#48C9B0]">
              Home
            </h1>
          </a>
          <a href="/#about">
            <h1 className="lg:text-3xl md:text-2xl first-line: hover:text-[#48C9B0]">
              About
            </h1>
          </a>
          <a href="/#game">
            <h1 className="lg:text-3xl md:text-2xl first-line: hover:text-[#48C9B0]">
              Project
            </h1>
          </a>
          <a href="/#con">
            <h1 className="lg:text-3xl md:text-2xl first-line: hover:text-[#48C9B0]">
              Contect
            </h1>
          </a>
        </div>
        <div className="icon md:hidden hover:cursor-pointer">
        </div>
      </div>
    </>
  );
}

export default Header;
