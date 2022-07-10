import { useEffect } from "react";
import Transitions from "../Transitions";
import Education from "./education";
import Me from "./me";
import Skills from "./skills/skills";


const About = () => {
  useEffect(() => {
    document.title = "About me";  
  }, []);
  return (
    <Transitions style={{backgroundColor:'#001220'}}>
      <Me/>
      <Education/>
      <Skills/>
    </Transitions>
  );
};

export default About;
