"use client";
import Link from "next/link";
import {useRouter} from "next/navigation"

const Login=()=>{
    const router=useRouter();
    return(
      <div>
          <h2>Login Page</h2>
        <Link href="/">go to home page</Link>
        <br />
        <button onClick={()=>router.push("/")}>Go to home page</button>
      </div>
    )
}

export default Login;