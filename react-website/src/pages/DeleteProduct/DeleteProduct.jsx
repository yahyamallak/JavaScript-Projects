import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './DeleteProduct.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function DeleteProduct() {

  const navigate = useNavigate();

  const {id} = useParams();

  function deleteProduct() {

    axios.delete(`http://localhost:8000/products/${id}`);

    navigate("/");
  }

  return (
    <div className='delete-products'>
      <h2 className='title'>Product #{id} deletion :</h2>
      <button onClick={deleteProduct}><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</button>
    </div>
  )
}

export default DeleteProduct