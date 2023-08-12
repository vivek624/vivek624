import User from "./user";

async function userDetails(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

export default async function userPage(){

    const users = await userDetails();
    console.log("users");
    return(
        <div>
            <h2>User details</h2>
            {
                users.map((items)=>(
                   <div>
                   <h3>id: {items.id} <br />First Name: {items.firstName}      </h3>
                    <User address = {items.address.city}  />
                    
                   </div>
                ))
            }
        </div>
    )
}