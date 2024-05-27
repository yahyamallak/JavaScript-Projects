import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddProduct = () => {

  const id = useRef('');
  const title = useRef('');
  const price = useRef('');

  const navigate = useNavigate()

  function addProduct() {

    let product = {
      id: id.current.value,
      title: title.current.value,
      price: price.current.value,
    }

    axios.post("http://localhost:8000/products",product,{
      headers: { 'Content-Type': 'application/json' }
    });

    navigate("/");

  }

  return (
    <div className='add-products'>
      <h2 className='title'><FontAwesomeIcon icon="fa-solid fa-square-plus" /> Add product : </h2>
      <input type="text" ref={id} name='id' placeholder='ID...' />
      <input type="text" ref={title} name='title' placeholder='Title...' />
      <input type="text" ref={price} name='price' placeholder='Price...$' />
      <button onClick={addProduct}><FontAwesomeIcon icon="fa-solid fa-square-plus" /> Add product</button>
    </div>
  )
}

export default AddProduct