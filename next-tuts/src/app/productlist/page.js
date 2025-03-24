"use client"
import React,{useState,useEffect} from 'react'

const ProductList = () => {

    const [data,setData]= useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                let response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data.products);
                setData(data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    },[]);

  return (
    <div>
        <h1>Products List</h1>
        <ol>
             {data.map((product, i) => (
                <li key={i}>{product.title}</li>
            ))}
        </ol>
    </div>
  )
}

export default ProductList