import Link from "next/link"
import Button from "../components/button/Button"
import Counter from "../components/counter/Counter"
export default function About(){
        const  listOfDirectors = ["naveed sarwar","Abu huraira","Bilal","Ahmed","Hamza"]
return(
    <div>
        <nav><Link href={"/"}>Home</Link>
        </nav>
        
<Button title = "submit"  data= "ok"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam libero, autem ad ea nisi iure sint? Nemo, ipsam porro labore adipisci quo illum sint tempore vitae. Perferendis, voluptatum libero!</p>
        <Counter/>
      {listOfDirectors.map((item,index)=>{
        return (
                <h2>{index+1}  - {item}</h2>

      )
      
      }
      )}
</div>
        )
}
