import { useRouter } from "next/router";
 
const About = ()=>{
    const router = useRouter()
    return(
        <div>
            <h1>About us</h1>
            <button onClick={()=>router.push("/")}>Go to Home</button>
        </div>
    )
}
export default About