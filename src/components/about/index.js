import Transitions from "../Transitions";
import Education from "./education";
import Me from "./me";
import Skills from "./skills/skills";


const About = () => {
  return (
    <Transitions style={{backgroundColor:'#001220'}}>
      <Me/>
      <Education/>
      <Skills/>
    </Transitions>
  );
};

export default About;
