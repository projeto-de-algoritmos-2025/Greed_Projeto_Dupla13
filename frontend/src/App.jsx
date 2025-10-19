import { useState, useEffect } from 'react'
import './index.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([]);

  const fetchAPI = async() => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data);
    console.log(response.data); 
  };
  
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1 className='text-amber-700'>Hello World</h1>
      <div className="card">
        {/*
          array.map((data, index) => (
            <div key={index}>
              <p>{data}</p>
            </div>
        ))
        */}
        
      </div>
    </>
  )
}

export default App
