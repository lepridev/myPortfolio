import React from "react";
import Button from "../design-system/Button";
import Container from "../design-system/Container";
import Image from "next/image";

type Props = {};

const Presentation = (props: Props) => {
  return (
    <Container>
      <div className="w-full h-80 px-4 md:px-7 py-5 space-y-3 md:h-[500px] md:flex md:flex-row md:items-center md:justify-center">
        <div className="gap-7 h-full flex flex-col items-center justify-center md:h-full md:flex md:flex-col md:items-center md:justify-center md:gap-6">
          <div>
            <h2 className="text-[26px] text-center font-bold mb-6 text-[#EAE2B7] md:text-[36px] ">
              Armand Lepri A.
            </h2>
            <p className="text-[14px] text-white md:text-[16px] ">
              Bienvenue sur mon portfolio ! Je suis un développeur web et mobile
              passionné, spécialisé dans la création dapplications et de sites
              web modernes et intuitifs...
            </p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4 md:mt-70">
            <Button variant="secondary" size="small">
              En savoir...
            </Button>
            <Button variant="outline" size="small">
              Mes Projets
            </Button>
          </div>
        </div>
        <div className="hidden md:w-full md:flex md:flex-row md:items-center md:justify-center">
          <div className="relative w-[400px] h-[200px] bg-white rounded-md">
            <Image
              src={"/assets/images/armandlepri.jpg"}
              fill
              alt="profile armand lepri"
              className="blur-3xl"
            />
            <Image
              src={"/assets/images/armandlepri.jpg"}
              width={400}
              height={300}
              alt="profile armand lepri"
              className="object-contain rounded-md absolute"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Presentation;
