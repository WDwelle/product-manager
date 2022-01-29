import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';

const Update = (props) => {

    let history = useHistory();

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])


    const update = (e) => {
        e.preventDefault();

        // create the obj from the form
        const newProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.put("http://localhost:8000/api/products/" + id, newProduct)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS");
                history.push("/")
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);
            })
    }

    return <div>
        <h3>UPDATE</h3>
        <Link to="/products">Home</Link>
        <form onSubmit={update}>
            title:
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            price:
            <input type="number" onChange={e => setPrice(e.target.value)} value={price}/>
            Description:
            <textarea onChange={e => setDescription(e.target.value)} value={description}/>
            <button>submit</button>
        </form>
    </div>;
};

export default Update;