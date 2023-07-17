import React from "react";
import Button from "../design-system/Button";
import Image from "next/image";
import Container from "../design-system/Container";

type Props = {};

const Competence = (props: Props) => {
  return (
    <Container>
      <div className="w-full  md:h-[500px] flex flex-col items-center justify-center space-y-5 px-5 md:px-4 mx-auto">
        <h3 className="text-[18px] md:text-[26px] text-[#EAE2B7] font-bold mb-4 md:mb-7">
          MES COMPETENCES
        </h3>
        <div className="w-full flex  flex-col md:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-3/5 flex flex-col items-center ">
            <div className="md:max-w-md  text-justify md:text-left">
              <p className="text-white mb-4">
                Dans mes projets récents, jai travaillé sur le développement
                dapplications mobiles pour iOS et Android en utilisant React
                Native. Jai également réalisé des sites web responsives et
                optimisés, en utilisant des frameworks et librairies tels que
                ReactJS, NextJS Tailwind CSS.
              </p>
            </div>
            <div className="mt-5">
              <Button variant="primary" size="large">
                Voir plus...
              </Button>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex flex-row flex-wrap gap-1 mt-5 pb-5">
            <Image
              src={"/assets/images/reactjs.png"}
              alt="javascript"
              width={160}
              height={100}
            />{" "}
            <Image
              src={"/assets/images/reactnative.png"}
              alt="javascript"
              width={160}
              height={100}
            />{" "}
            <Image
              src={"/assets/images/javascript.png"}
              alt="javascript"
              width={160}
              height={100}
            />{" "}
            <Image
              src={"/assets/images/tailwind.png"}
              alt="javascript"
              width={160}
              height={100}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Competence;
