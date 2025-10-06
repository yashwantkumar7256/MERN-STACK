import { Children } from "react";


const About=({title,children,aboutTitle})=>{
return <>
<div className="  shadow-black-400" ></div>
<div className="font-bold text-3xl mx-2 mb-10"><div>{title}  </div>
<p className="mt-2">{children}</p>


</div>

</>
}
export default About;