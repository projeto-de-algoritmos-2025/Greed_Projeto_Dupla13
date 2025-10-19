const ParkingResult = ({ result }) => {
if (!result || result.length === 0)
    return <p className="text-gray-500 text-center mt-4">Nenhum agendamento otimizado ainda.</p>;

    return (
        <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
        <h2 className="text-lg font-semibold text-green-700 mb-2">Agendamentos Otimizados</h2>
        <ul className="list-disc ml-6">
            {result.map((r, index) => (
            <li key={index}>
                {r.vehicle} — {r.start} até {r.end}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ParkingResult;