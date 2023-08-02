"use client";

// export default function Lecture(){
//     return(
//         <h3>Accessing lecture 1 page</h3>
//     )
// }

export default function Lecture({params}){
    console.log(params);
    return(
<div>
    
<h4>Accessing lecture 1 page</h4>
        <h1>{params.lecture[0]}</h1>
        <h4>{params.lecture[1]}</h4>
</div>
    )
}