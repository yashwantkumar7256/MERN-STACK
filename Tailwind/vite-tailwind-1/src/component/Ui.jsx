function Front(props){
    return<>
    <div className="bg-amber-800 " >
    <div>{props.title}</div>
    <div>{props.img}</div>
    <div className="text-amber-200"> {props.price} </div>
    </div>
    </>
}
export default Front;