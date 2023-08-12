
"use client"
export default function User({address}){
    console.log(address)
    return(
        <div>  
        <button onClick={()=>alert(address)}> address</button>
        <br />
       
        
        </div>
    )
}

