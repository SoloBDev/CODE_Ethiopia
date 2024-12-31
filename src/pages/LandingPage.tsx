import About from "../components/Home/About";
import CoWorkers from "../components/Home/CoWorkers";
import Home from "../components/Home/Home";
import Regions from "../components/Home/Regions";
import Services from "../components/Home/Services";
import WorkWithUs from "../components/Home/WorkWithUs";
import "./styles.css";
const LandingPage = () => {
  return (
    <>
    
      <Home />
      <Regions />
      <About />
      <WorkWithUs />
      <Services />
      <CoWorkers />
      
    </>
  );
};

export default LandingPage;
