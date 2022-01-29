import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const Main = (props) => {

    const history = useHistory();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([]);

//===CREATE===\\
    const createProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.post("http://localhost:8000/api/products", newProduct)
            .then((res) => {
                console.log("Success");
                history.push("/");
            })
            .catch( err => {
                console.log("Error");
                console.log(err.response.data);
            })
    }
//===READ===\\
    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then( (res) => { 
                console.log(res.data.products)
                setProducts(res.data.products)
            })
            .catch( err => console.log(err))
    },[])

//===DELETE===\\
    const deleteProduct = (deleteId) => {
        axios.delete("http;//localhost:8000/api/products/" + deleteId)
            .then( res => {
                console.log("Success")
                setProducts(products.filter( (product) => product._id !== deleteId))
            })
            .catch( err => console.log(err))
    }

    return (
        <div>
            <h3>Create new product</h3>
            <form onSubmit={createProduct}>
                title
                <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
                price
                <input type="number" onChange={e => setPrice(e.target.value)} value={price}/>
                description
                <textarea onChange={e => setDescription(e.target.value)} value={description}/>
                <button>Create</button>
            </form>
            <hr/>
            <h3>Products</h3>
            {
                products.map((product, i) => {
                    return <div key={i}>
                        <Link to={"/products/" + product._id}>{product.title}</Link>
                        <button onClick={ () => deleteProduct(product._id)}>DELETE</button>
                    </div>
                })
            }
        </div>
    )
};

export default Main;