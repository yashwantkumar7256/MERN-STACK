function Project({item}){
  //  let yash=["HTML", "CSS","JS","JAVA", "C"]
    return<>
    <div>
        {item.map(arr=> <div>{arr}</div>

        )}

    </div>
    
    </>
}
export default Project;
