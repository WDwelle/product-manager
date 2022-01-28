import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Main = (props) => {

    const [data, setData] = useState([])
//setting data into memory
    useEffect( () => {
    axios.get("http://localhost:8000/api/products")
        .then( (res) => { 
            console.log(res.data.products)
            setData(res.data.products)
        })
        .then( err => console.log(err))
    },[])

    return (
        <div>
            <h3>Products</h3>
            {
                data.map((product, i) => {
                    return <p key={i}>
                        {product.title}
                    </p>
                })
            }
        </div>
    )
};

export default Main;