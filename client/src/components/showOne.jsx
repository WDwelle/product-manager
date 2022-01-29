import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewOne = (props) => {

    const {id} = useParams()

    const [thisProduct, setThisProduct] = useState({})

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data);
                setThisProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return <div>
        <h2>{thisProduct.title}</h2>
        <h3>{thisProduct.price}</h3>
        <h3>{thisProduct.description}</h3>
    </div>

};

export default ViewOne;
