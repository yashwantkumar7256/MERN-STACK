
const Pill=({title})=>{
    return<span className="mx-3 text-xl ">{title.map(Title=><span className="bg-slate-400 mx-1  p-1 rounded-2xl mb-10" >{Title}</span>)}</span>
 
 
    
}
export default Pill;