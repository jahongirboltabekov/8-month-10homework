import React from 'react';
import './Home.scss'
import {useGetProductsQuery,} from "../../context/api/ProductApi/ProductApi";
import { Link } from "react-router-dom";


const Home = () => {
  const { data } = useGetProductsQuery({ limit: 52 });
  const card = data?.data?.products?.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.urls[0]} alt="" />
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <b>$ {product.price}</b>
      {isAdmin ? (
        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
      ) : (
        <></>
      )}
    </div>
  ));

  let cards = data?.data?.users?.map((user) =>(
    <div className="card">
     <h5>{user.FirstName}</h5>
     <p>{user.LastName}</p>
    </div>
  ))
  return (
    <div className="">
      <div className='container'>
        <div className="wrapper">
          {cards}
        </div>
      </div>
    </div>
  )
}

export default Home;
