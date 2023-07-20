import React from "react";
import {
  RiLinkedinFill,
  RiMailCheckFill,
  RiWhatsappFill,
} from "react-icons/ri";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div id="contact" className="md:h-[100px] h-[100px] bg-black">
      <div className="flex items-center py-2 justify-center flex-col">
        <p className="text-white">Abidjan Côte dIvoire Port-Bouet</p>
        <p className="text-white">+225 01 71 890 091 / +225 07 99 520 702</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <RiLinkedinFill
          size={26}
          color="white"
          className="hover:bg-[#D62828] cursor-pointer"
        />
        <RiMailCheckFill
          size={26}
          color="white"
          className="hover:bg-[#D62828] cursor-pointer"
        />
        <RiWhatsappFill
          size={26}
          color="white"
          className="hover:bg-[#D62828] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
