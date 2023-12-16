import { Buttonprops } from "@/app/types/componentstype";
function Button(props:Buttonprops){
    return(
        <button>{props.title}</button>
    )
}
export default Button;