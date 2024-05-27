import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function DeleteProduct() {

  const navigate = useNavigate();

  const {id} = useParams();

  function deleteProduct() {

    axios.delete(`http://localhost:8000/products/${id}`);

    navigate("/");
  }

  return (
    <div>
      <h1>Product #{id} deletion :</h1>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  )
}

export default DeleteProduct