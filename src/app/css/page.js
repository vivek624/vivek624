"use client";
import { useState } from "react"
import style from "./style.module.css"
export default function changeColor(){
    const [color, setColor]= useState("red");
    return(
        <div>
        {/* <h2 className={style.red}>css effect via button and condition</h2> */}
       <h2 className={color=='red'?style.red:style.green}>i am changing</h2>
       <h3 style ={ {backgroundColor:color=='red'?'red':'green'}}>heading 3</h3>
       <button onClick={()=>setColor("green")}>update color</button>
        </div>
    )
}