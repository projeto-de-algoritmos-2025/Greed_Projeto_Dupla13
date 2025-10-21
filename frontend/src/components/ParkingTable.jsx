function isoToLocalTime(isoStr) {
  const date = new Date(isoStr);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
}

const ParkingTable = ({ requests }) => {
    if (requests.length === 0)
        return <p className="text-gray-500 text-center mt-4">Nenhuma solicitação registrada.</p>;

        return (
            <table className="w-full border-collapse border border-gray-200 mt-6">
                <thead className="bg-amber-100">
                    <tr>
                    <th className="border p-2">Veículo</th>
                    <th className="border p-2">Início</th>
                    <th className="border p-2">Término</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((req, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="border p-2 text-center">{req.title}</td>
                        <td className="border p-2 text-center">{isoToLocalTime(req.start)}</td>
                        <td className="border p-2 text-center">{isoToLocalTime(req.end)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }

export default ParkingTable;