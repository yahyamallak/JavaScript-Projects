import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function EditProduct() {

  const {id} = useParams();

  const navigate = useNavigate()

  const productId = useRef();
  const productTitle = useRef();
  const productPrice = useRef();

  const [product, setProduct] = useState({
    id: '',
    title: '',
    price: ''
  });

  async function getProduct()  {
    try {
      const {data} = await axios.get(`http://localhost:8000/products/${id}`);
      setProduct(data);
  
    } catch(error) {
      console.log(error)
    }
  }

  async function updateProduct() {

    let productUpdated = {
      id: productId.current.value,
      title: productTitle.current.value,
      price: productPrice.current.value
    }

    await axios.patch(`http://localhost:8000/products/${id}`, productUpdated);

    navigate("/");

  }

  useEffect(()=> {
    getProduct();
  })


  return (
    <div className='edit-products'>
      <h2 className='title'><FontAwesomeIcon icon="fa-regular fa-pen-to-square" /> Edit product #{id} : </h2>
      <input type="text" ref={productId} name='id' placeholder='ID...' defaultValue={product.id} />
      <input type="text" ref={productTitle} name='title' placeholder='Title...' defaultValue={product.title} />
      <input type="text" ref={productPrice} name='price' placeholder='Price...$' defaultValue={product.price} />
      <button onClick={updateProduct}><FontAwesomeIcon icon="fa-regular fa-pen-to-square" /> Edit product</button>
    </div>
  )
}

export default EditProduct