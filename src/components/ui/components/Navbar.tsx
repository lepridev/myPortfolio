"use client";

import Image from "next/image";
import React, { useState } from "react";
import Container from "../design-system/Container";
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail, MdOutlineWeb, MdClose } from "react-icons/md";
import clsx from "clsx";

const Navbar = () => {
  const [togglenav, setTogglenav] = useState(false);

  return (
    <Container>
      <div className="fixed top-0 left-0 right-0 flex w-full items-center justify-between bg-[#F77F00] md:rounded-md md:border-black py-2 px-10 shadow-sm   md:bg-[#0e080834]  animate ">
        <div className=" w-[70px] h-10 md:w-[90px]  relative">
          <Image
            src={"/assets/images/logo.png"}
            alt="Logo Armand Lepri"
            fill
            className="object-contain"
            property="true"
            sizes="max-width: 80px"
          />
        </div>
        <div className="w-full  ">
          <div className="hidden md:flex md:items-center justify-center">
            <div className="w-2/3 flex items-center justify-center space-x-12 text-white">
              <a href="#/">Home</a>
              <a href="#/">Projects</a>
              <a href="#/">About</a>
            </div>
            <div className="w-1/3 flex items-center justify-center space-x-3 text-white">
              <AiFillGithub size={24} color="#fff" className="cursor-pointer" />
              <AiFillLinkedin
                size={24}
                color="#fff"
                className="cursor-pointer"
              />
              <MdOutlineWeb size={24} color="#fff" className="cursor-pointer" />
              <MdEmail size={24} color="#fff" className="cursor-pointer" />
            </div>
          </div>
          <div className="md:hidden flex items-center justify-end animate">
            {togglenav ? (
              <MdClose
                size={24}
                color="#fff"
                className="cursor-pointer animate"
                onClick={() => setTogglenav(!togglenav)}
              />
            ) : (
              <AiOutlineMenu
                size={24}
                color="#fff"
                className="cursor-pointer animate"
                onClick={() => setTogglenav(!togglenav)}
              />
            )}
          </div>
        </div>

        <div
          className={clsx(
            `md:hidden w-[60%] absolute p-8 shadow-md  top-[100%]  right-0 bg-white rounded-b-md animate ${
              togglenav ? "" : "hidden"
            }`
          )}
        >
          <div className="w-full py-10 px-7 space-y-4 flex flex-col items-center justify-center backdrop:blur-md animate   text-black">
            <a href="#/">Home</a>
            <a href="#/">Projects</a>
            <a href="#/">About</a>
          </div>
          <div className="flex items-center justify-between text-black">
            <AiFillGithub
              size={24}
              color="#000"
              className="cursor-pointer"
              onClick={() => setTogglenav(!togglenav)}
            />
            <AiFillLinkedin
              size={24}
              color="#000"
              className="cursor-pointer"
              onClick={() => setTogglenav(!togglenav)}
            />
            <MdOutlineWeb
              size={24}
              color="#000"
              className="cursor-pointer"
              onClick={() => setTogglenav(!togglenav)}
            />
            <MdEmail
              size={24}
              color="#000"
              className="cursor-pointer"
              onClick={() => setTogglenav(!togglenav)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
