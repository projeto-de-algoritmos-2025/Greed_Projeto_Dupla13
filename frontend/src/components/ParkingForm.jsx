import { useState } from 'react';

function toISODateTime(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    const today = new Date;
    today.setHours(hours, minutes, 0, 0);
    return today.toISOString();
}
const ParkingForm = ({onAddRequest}) => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [vehicle, setVehicle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!start || !end || !vehicle) return;
        onAddRequest({task: {title: vehicle, start: toISODateTime(start), end: toISODateTime(end)}});
        setStart('');
        setEnd('');
        setVehicle('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Veículo</label>
                <input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="Ex: Carro A"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">Início</label>
                <input
                    type="time"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Término</label>
                <input
                    type="time"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
                </div>
            </div>

            <button
                type="submit"
                className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition"
            >
                Adicionar Solicitação
            </button>
        </form>
  );
}

export default ParkingForm;