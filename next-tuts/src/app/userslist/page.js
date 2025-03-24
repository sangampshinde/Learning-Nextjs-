import React from 'react'

const productlist = async () => {
  let response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}

const UserList = async () => {
  let products = await productlist();
  // console.log(products);

  return (
    <div>
      <h1>Server Side API Fetching</h1>
      <ol>
        {products.map((product,i)=>(
          <li key={i}>{product.title}</li>
        ))}
      </ol>
    </div>
  )
}

export default UserList