import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ParkingForm from '../../components/ParkingForm';
import ParkingResult from '../../components/ParkingResult';
import ParkingTable from '../../components/ParkingTable';

import axios from 'axios';

const HomePage = () => {
  const [requests, setRequests] = useState([]);
  const [result, setResult] = useState([]);

  const handleAddRequest = (req) => {
    setRequests([...requests, req]);
  };

  // aplicação mock de um algoritmo de otimização
  const handleOptimize = () => {
    const sorted = [...requests].sort((a, b) => a.end.localeCompare(b.end));
    setResult(sorted);
  };
  // verificar se mantém o código ou não
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
    <div>
      <Header />
      <main className=''>
        <ParkingForm onAddRequest={handleAddRequest} />
        <ParkingTable requests={requests} />
        {/* esse botão irá ativar o algoritmo ambicioso */}
        <div className="text-center">
          <button
            onClick={handleOptimize}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Otimizar Agendamentos
          </button>
        </div>
        <ParkingResult result={result} />
      </main>
    </div>
  );
}

export default HomePage;
