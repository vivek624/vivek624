"use client";
import Link from "next/link";
import {useRouter} from "next/navigation"

const Login=()=>{
    const router=useRouter();
    const navigate=(page)=>{
      router.push("/login"+page)
    }
    return(
      <div>
          <h2>Login Page</h2>
        <Link href="/">go to home page</Link>
        <br />
        <br />

        <button onClick={()=>router.push("/")}>Go to home page</button>
        <br />
        <br />

        <Link href="/login/studentlogin">go to student login</Link>
        <br />
        {/* <button onClick={()=>router.push("/login/studentlogin")}>Studentlogin page</button> */}
        <button onClick={()=>navigate("/studentlogin")}>Studentlogin page</button>
      </div>
    )
}

export default Login;