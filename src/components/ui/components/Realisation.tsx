import { Interface } from "readline";
import Container from "../design-system/Container";
import ProjectBox from "../design-system/ProjectBox";
import { IconType } from "react-icons";

interface Props {
  label?: string;
  imgSrc?: string;
  description?: string;
  git?: boolean;
  demo?: string;
}

const Realisation = () => {
  const realisations = [
    {
      id: 1,
      imgScr: "/assets/images/sitebg.png",
      label: "Application Web",
      description:
        "Site vitrine codé à partir de react JS, Tailwind css . partie Front-end",
      gitLink: true,
      demoLink: true,
    },
    {
      id: 2,
      imgScr: "/assets/images/mobil.png",
      label: "Application Mobile",
      description:
        "Site vitrine codé à partir de react JS, Tailwind css . partie Front-end",
      gitLink: true,
      demoLink: true,
    },
    {
      id: 3,
      imgScr: "/assets/images/ecommerce.png",
      label: "Application e-marchant",
      description:
        "Site vitrine codé à partir de react JS, Tailwind css . partie Front-end",
      gitLink: true,
      demoLink: true,
    },
    {
      id: 4,
      imgScr: "/assets/images/restaurantfill.png",
      label: "Application restaurant",
      description:
        "Site vitrine codé à partir de react JS, Tailwind css . partie Front-end",
      gitLink: true,
      demoLink: true,
    },
    {
      id: 5,
      imgScr: "/assets/images/ecommerce.png",
      label: "Application e-marchant",
      description:
        "Site vitrine codé à partir de react JS, Tailwind css . partie Front-end",
      gitLink: true,
      demoLink: true,
    },
    {
      id: 6,
      imgScr: "/assets/images/restaurantfill.png",
      label: "Application restaurant",
      description:
        "Site vitrine codé à partir de react JS, Tailwind css . partie Front-end",
      gitLink: true,
      demoLink: true,
    },
  ];

  return (
    <Container>
      <div
        id="realisation"
        className="w-full  flex flex-col items-center space-y-5 px-5 md:px-4 mx-auto"
      >
        <h3 className="text-[18px] md:text-[26px] text-[#EAE2B7] font-bold mb-4 md:mb-7">
          MES PROJETS
        </h3>
        <div className="w-full flex  flex-col md:flex-row-reverse md:flex-wrap items-center justify-between">
          {realisations.map((realisation) => (
            <ProjectBox
              key={realisation.id}
              label={realisation.label}
              description={realisation.description}
              imgSrc={realisation.imgScr}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Realisation;
