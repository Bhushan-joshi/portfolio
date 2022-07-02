import Transitions from "../Transitions";
import Education from "./education";
import Me from "./me";


const About = () => {
  return (
    <Transitions style={{backgroundColor:'#001220'}}>
      <Me/>
      <Education/>
     
    </Transitions>
  );
};

export default About;
