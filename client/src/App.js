import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState({})

  useEffect( () => {
    axios.get("http://localhost:8000/api/products")
      .then( res => console.log(res.data))
      .then( err => console.log(err))
  },[])

  return (
    <div className="App">
      <h1>Products</h1>
      <hr />

    </div>
  );
}

export default App;
