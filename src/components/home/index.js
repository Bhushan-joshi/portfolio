import "./home.css";
// import logo from '../../assets/wave.gif'
import Typical from "react-typical";
import Transitions from "../Transitions";

const Home = () => {
  return (
    <Transitions>
      <div className="bg-slate-800 bg-img h-screen ">
        <div className=" flex flex-row justify-center ">
          <p className=" text-white pt-20 text-xl sm:text-2xl ">
            Hello World !
          </p>
        </div>
        <div className=" flex flex-row justify-center mt-6 sm:mt-7">
          <Transitions duration={1} >
            <h1 className="text-center text-5xl sm:text-7xl font-semibold my-name ">
              Bhushan C Joshi
            </h1>
          </Transitions>
        </div>
        <div className=" flex flex-row justify-center mt-6 sm:mt-3 font-mono text-5xl space-x-3">
          <h1 className="text-center text-xl sm:text-2xl text-white"> I'm </h1>
          <div className="text-center text-xl sm:text-2xl text-white ">
            <Typical
              steps={[
                "Student.",
                3000,
                "Web Developer.",
                3000,
                "Proud Indian.",
                3000,
              ]}
              wrapper="p"
              loop={Infinity}
            />
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default Home;

//F84A5f
