import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const [product,setProduct] = useState({})


    useEffect(() => {
        fetch('https://stark-thicket-25212.herokuapp.com/products/'+productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productKey])

    return (
        <div>
            <h1> Product Details: {productKey} </h1>
            <Product  showAddToCart ={false} product={product}></Product>
        </div>
    );
};


export default ProductDetails;