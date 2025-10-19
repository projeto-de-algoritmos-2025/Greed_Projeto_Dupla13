import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api');
      setArray(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-amber-700 font-bold mb-4">Hello World</h1>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition"
      >
        Contar: {count}
      </button>

      <div className="mt-6 space-y-2">
        {array.length > 0 ? (
          array.map((data, index) => (
            <div key={index} className="p-2 border border-amber-300 rounded-md">
              <p>{data}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Nenhum dado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
