import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios" 
import './Products.css'
import { Link } from 'react-router-dom';


function Products() {
  
  const [products, setProducts] = useState([]);
  
  async function getProducts()  {
    try {
      const {data} = await axios.get('http://localhost:8000/products');
      
      setProducts(data);
  
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getProducts();
  }, [])

  return (
    <Fragment>
      <h2>Products List : </h2>
      <table className='products'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product) => 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <Link to={`product/edit/${product.id}`}><button>Edit</button></Link>
                  <Link to={`product/delete/${product.id}`}><button>Delete</button></Link>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Products