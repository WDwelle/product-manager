import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewOne = (props) => {

    const {id} = useParams()

    const [oneProduct, setOneProduct] = useState({})

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data.product);
                setOneProduct(res.data.product)
            })
            .catch(err => console.log(err))
    }, [])

    return <div>
        <Link to="/products">Home</Link>
        <h2>{oneProduct.title}</h2>
        <h3>{oneProduct.price}</h3>
        <h3>{oneProduct.description}</h3>
    </div>

};

export default ViewOne;
