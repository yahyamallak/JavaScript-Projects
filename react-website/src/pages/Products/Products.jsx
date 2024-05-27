import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios" 
import './Products.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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
      <h2 className='title'><FontAwesomeIcon icon="fa-solid fa-list" /> Products List : </h2>
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
                <td className='actions'>
                  <Link to={`product/edit/${product.id}`}><button className='edit-btn'><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> Edit</button></Link>
                  <Link to={`product/delete/${product.id}`}><button className='delete-btn'><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</button></Link>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Products