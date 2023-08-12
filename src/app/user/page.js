
 "use client";
 import { useState } from "react"



// export default function Page(){

//     const [h3style,setH3style]= useState({backgroundColor:"orange"})
//     return(
//         <div>
//             <h2 style={{backgroundColor:"yellow"}}>user page</h2>
// <h3 style={h3style}>Automate color change on button click!!</h3>
// <button onClick={()=>setH3style({backgroundColor:"yellow"})}>click me</button>

//         </div>
//     )
// }

export default function Page(){2

    const [h3style, setH2style]=useState({backgroundColor: 'red'});

     return(
        <div>
        <h2 style={{backgroundcolor:"pink"}}>user page</h2>
        <h3 style={h3style}>color event  change  on button click</h3>
            <button onClick={()=>setH2style({backgroundColor:"rgb(12,182,79,0.6"})}>click me</button>
        </div>
    )
}