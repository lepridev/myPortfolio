import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { MdWeb } from "react-icons/md";

interface Props {
  label?: string;
  imgSrc?: string;
  description?: string;
  git?: string;
  demo?: string;
  icon?: { icon: IconType };
}

const ProjectBox = ({
  label = "Application Web",
  imgSrc,
  description,
  git = "code",
  demo = "demo",
  icon,
}: Props) => {
  let descriptiontext: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem officiis expedita. Assumenda qui sapiente vel similique impedit voluptatem placeat harum soluta modi dignissimos doloribusbeatae dicta";

  return (
    <div className="flex flex-col items-center w-[90%] md:max-w-[300px] mx-auto my-3 border border-gray-300  rounded-t-md">
      <div className="rounded-md relative ">
        <Image
          src={"/assets/images/sitebg.png"}
          alt="site web"
          width={300}
          height={300}
          className="object-contain rounded-t-md relative"
        />
      </div>
      <div className="flex flex-col px-4 py-3 bg-white">
        <div className="flex flex-col">
          <h5 className="text-[#003049] mt-2 font-bold ">{label}</h5>
          <p className="text-[13px] text-[#003049] mt-3 text-justify">
            {descriptiontext}
          </p>
        </div>
        <div>
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
