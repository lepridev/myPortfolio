import Presentation from "../ui/components/Presentation";
import Competence from "../ui/components/Competence";
import Realisation from "../ui/components/Realisation";
import Methode from "../ui/components/Methode";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="relative">
      <div className="fixed bottom-[5%] right-1 z-30">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <BsFillArrowUpCircleFill size={30} color="#fff" />
        </Link>
      </div>
      <Presentation />
      <Competence />
      <Realisation />
      <Methode />
    </div>
  );
};

export default Home;
