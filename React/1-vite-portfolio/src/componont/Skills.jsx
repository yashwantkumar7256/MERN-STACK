import About from "./About";
import Pill from "./Pill";

const Skills =()=>{
  const skill=["html", "css", "js ", "java" ,"Tailwind"];
    return <>
     <About   title="skills">
          <div >
       <Pill title={skill}/>
       </div>
        
      </About>
    </>


    
    
}
export default Skills;