import Progress from "./Progressbar";

const Skills = () => {
  return (
    <>
      <h1
        className="text-center text-5xl mb-4 "
        style={{ color: "#99b898", fontFamily: "Roboto" }}
      >
        Skills
      </h1>
      <div className="mt-0 sm:mr-40 sm:ml-40 mb-16 p-10 ">
        <Progress  name="C++" percentage="85%" />
        <Progress  name="JavaScript" percentage="75%" />
        <Progress  name="Mongodb" percentage="60%" />
        <Progress  name="Express.js" percentage="80%" />
        <Progress  name="React" percentage="70%" />
        <Progress  name="Nodejs" percentage="70%" />
        <Progress  name="Git" percentage="65%" />
        <Progress  name="Linux" percentage="80%" />
        <Progress  name="Redux" percentage="50%" />
        <Progress  name="SQL" percentage="55%" />
        <Progress  name="HTML" percentage="85%" />
        <Progress  name="CSS" percentage="76%" />
        <Progress  name="Life" percentage="10%" />
      </div>
    </>
  );
};

export default Skills;
