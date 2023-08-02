"use client"

export default function Student({params}){
    console.log(params);

    return(
        <div>
            <h1>student details</h1>
            <h3>Name : {params.students}</h3>

        </div>
    )
}