import Card from "./card";
import projectItems from "./Data";
import './projects.css'

const Projects = () => {
  return (
    <div className="bg_projects container p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {projectItems.map(item=>(
        <Card item={item}   key={item.id}/>
      ))}
    </div>
  );
};

export default Projects;
