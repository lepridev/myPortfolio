import React from "react";
import Container from "../design-system/Container";
import ProjectBox from "../design-system/ProjectBox";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { VscDebugConsole } from "react-icons/vsc";
import { HiCode } from "react-icons/hi";
import { IconType } from "react-icons";

const Methode = () => {
  const methodes = [
    {
      id: 1,
      label: "Anticipation",
      description:
        "Pour un projet, j'analyse les exigences et les spécifications du client ou de l'équipe de developpement afin d'avoir une vision claire et les contraintes du projet. j'opte pour la division du projet en de petites taches afin d'établir des priorités. Cela me permet d'avoir la possibilté de pouvoir donner des delais réaliste.",
      icon: { icon: AiOutlineClockCircle },
    },
    {
      id: 2,
      label: "Prototypage",
      description:
        "Concevoir une maquette du projet avec Figma pour s'accorder sur les differents composants et fonctionnement du projet: la charte graphique et l'experience utilisateur ",
      icon: { icon: GiSettingsKnobs },
    },
    {
      id: 3,
      label: "Développement",
      description:
        "J'attache une grande importance à la qualité du code et à l'optimisation des performances. Je m'efforce toujours d'écrire un code propre, bien structuré et facilement maintenable.",
      icon: { icon: HiCode },
    },
    {
      id: 4,
      label: "Tests et débogage",
      description:
        "Tester un site après le développement est une étape cruciale pour s'assurer qu'il fonctionne correctement, qu'il est compatible avec différents appareils et navigateurs, et qu'il offre une expérience utilisateur optimale.",
      icon: { icon: VscDebugConsole },
    },
  ];

  return (
    <Container>
      <div
        id="methode"
        className="w-full  h-full md:h-[500px] flex flex-col items-center space-y-5 px-5 md:px-4 mt-12 mx-auto"
      >
        <h3 className="text-[18px] md:text-[26px] text-[#EAE2B7] font-bold mb-4 md:mb-7">
          METHODE DE TRAVAIL
        </h3>
        <div className="w-full flex  flex-col md:grid md:grid-cols-2 md:gap-2 items-center justify-between">
          {methodes.map((methode) => (
            <MethodeBox
              key={methode.id}
              label={methode.label}
              description={methode.description}
              icon={methode.icon}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

interface Props {
  label: string;
  description: string;
  icon: { icon: IconType };
}

export const MethodeBox = ({ label, description, icon }: Props) => {
  return (
    <div className=" flex-col-reverse flex md:flex-col-reverse md:items-start md:justify-start w-full items-center justify-around gap-3 rounded-md  p-4">
      <p className="text-[14px] text-white text-justify md:max-w-sm ">
        {description}
      </p>
      <div className="bg-black w-full md:w-[220px] h-[40px] px-4 rounded-md flex flex-row  items-center justify-between">
        <p className="text-white">{label}</p>
        <icon.icon size={24} color="#F77F00" />
        {/* <AiOutlineClockCircle
                size={24}
                color="#F77F00"
                className="cursor-pointer"
              /> */}
      </div>
    </div>
  );
};

export default Methode;
