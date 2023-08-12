import Product from "./product";

async function productList(){
   let data = await fetch ("https://dummyjson.com/products") ;
   data = await data.json();
   return data.products;
}

export default async function productPage(){
    const products = await productList();
    console.log("products");
    return(
       
        <div>
         <h2>products details</h2>
         {
            products.map((item)=>(
               <div>
               <h3>sn: {item.id} <br /> Name: {item.title} <br /> price: {item.price}  </h3>
           <Product  price = {item.price}/>  //this line is used for button control.
               </div>
            ))
         }
         </div>
    )
}