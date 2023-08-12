"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  return (
    <main>
      {/* <User name= "Vivek"/>  
      <User name="Mainali" />
    <div>hello</div> */}

      <h1>Basic Routing| make new page</h1>
      <div>
        <Link href="/login">Go to login page</Link>
        <br />
        <Link href="/about">Go to about page</Link>
        <br />
        <br />
        
        <button onClick={() => navigate("/login")}>Go to login page</button>
        <button onClick={() => navigate("/about")}>Go to about page</button>
      </div>
         <br />
         <br />
       <h2>Fetch data using server components</h2>
       <Link href="/productlist">Go to product page</Link>
<br />

<h2>Style and CSS with Next js</h2>
<br />

<h2> Conditioning with css and styles.</h2>


    </main>
  );
}

// const User = (props) => {
//   return (
//     <div>
//       <h2>User name is {props.name}</h2>
//     </div>
//   );
// };
