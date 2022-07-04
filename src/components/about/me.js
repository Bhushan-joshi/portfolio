import Transitions from "../Transitions";

const Me = () => {
  return (
    <Transitions duration=".9">
      <div
        className="container mx-auto border-2 w-3/4 mt-20 p-0 border-black text-white rounded-xl"
        style={{ background: " #411934" }}
      >
        <div className="w-full h-6 m-0 p-1 bg-slate-600 rounded-t-lg">
          <div className="flex">
            <div className="rounded-full bg-red-700 h-4 w-4 mr-2 ml-2"></div>
            <div className="rounded-full bg-orange-500 h-4 w-4 mr-2"></div>
            <div className="rounded-full bg-green-500 h-4 w-4 mr-2"></div>
          </div>
        </div>
        <h1 className="m-4 ml-3">
          <span style={{ color: "#06989a" }}>
            <b>bhushan@~$</b>{" "}
          </span>
          <i style={{ color: "#ad7fa8" }}>whoami</i> <br></br>
          <span style={{ color: "#E5E5E5" }}>
            An inquisitive learner innovative to build a good society with the
            ability to solve problems. I am currently pursuing my bachelor's
            degree in computer science. Programming Languages efficiency in C++
            in competitive (5🌟 HackerRank, 3🌟 CodeChef), Java, Python,
            Javascript. Currently working on enhancing technical as well as
            interpersonal skills.
          </span>
        </h1>
      </div>
    </Transitions>
  );
};

export default Me;
