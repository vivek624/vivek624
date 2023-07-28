"use client"
import {useRouter} from "next/navigation";

const About=()=>{
    const router= useRouter();
    const navigate=(name)=>{
        router.push(name);
    }
    return(
        <div>
            <h2>About Us</h2>
            <button onClick={()=>navigate("/")}>Go to home page</button>
        </div>
    )
}
export default About;