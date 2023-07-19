import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { MdWeb } from "react-icons/md";

interface Props {
  label?: string;
  imgSrc?: any;
  description?: string;
  git?: string;
  demo?: string;
}

const ProjectBox = ({
  label = "Application Web",
  imgSrc,
  description,
  git = "code",
  demo = "demo",
}: Props) => {
  return (
    <div className="flex flex-col items-center w-[90%] md:w-[300px] mx-auto my-3 border border-gray-300  rounded-t-md">
      <div className="rounded-md relative w-[100%] h-[200px] ">
        <Image
          src={imgSrc}
          alt="site web"
          fill
          className="object-contain w-auto h-auto rounded-t-md relative"
          sizes="(max-width: 768px)"
          priority={false}
        />
      </div>
      <div className="flex flex-col px-4 py-3 bg-white">
        <div className="flex flex-col">
          <h5 className="text-[#003049] mt-2 font-bold ">{label}</h5>
          <p className="text-[13px] text-[#003049] mt-3 text-justify">
            {description}
          </p>
        </div>
        <div className="">
          <p className="text-[12px] text-[#D62828] mt-2">{`voir le ${git} et la ${demo}`}</p>
          <div className="flex flex-row items-center justify-start gap-4">
            <AiFillGithub
              size={24}
              color="#F77F00"
              className="cursor-pointer"
            />

            <MdWeb size={24} color="#F77F00" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
