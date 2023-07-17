import React from "react";
import Container from "../design-system/Container";
import Image from "next/image";
import Button from "../design-system/Button";
import ProjectBox from "../design-system/ProjectBox";

type Props = {};

const Realisation = (props: Props) => {
  return (
    <Container>
      <div className="w-full  h-[300px] md:h-[500px] flex flex-col items-center space-y-5 px-5 md:px-4 mx-auto">
        <h3 className="text-[18px] md:text-[26px] text-[#EAE2B7] font-bold mb-4 md:mb-7">
          MES PROJETS
        </h3>
        <div className="w-full flex  flex-col md:flex-row-reverse items-center justify-between">
          <ProjectBox />
        </div>
      </div>
    </Container>
  );
};

export default Realisation;
