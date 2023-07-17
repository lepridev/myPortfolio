import React from "react";
import Button from "../ui/design-system/Button";
import ProjectBox from "../ui/design-system/ProjectBox";
import Presentation from "../ui/components/Presentation";
import Competence from "../ui/components/Competence";
import Realisation from "../ui/components/Realisation";

const Home = () => {
  return (
    <div className="">
      <Presentation />
      <Competence />
      <Realisation />
    </div>
  );
};

export default Home;
