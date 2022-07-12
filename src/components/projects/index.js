import { useEffect } from "react";
import Card from "./card";
import projectItems from "./Data";
import './projects.css'

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";  
  }, []);
  return (
    <div className="bg_projects  p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {projectItems.map(item=>(
        <Card item={item}   key={Math.random()*100}/>
      ))}
    </div>
  );
};

export default Projects;
