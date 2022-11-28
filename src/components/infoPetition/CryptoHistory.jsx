import dayjs from "dayjs";

const CryptoHistory = ({ historyPetition }) => {
    return (
        <table className="w-3/4 border-2 border-gray-400 text-center m-5">
            <thead className="">
                <tr className="bg-yellow-500">
                    <th className="border border-slate-600">Fecha</th>
                    <th className="border border-slate-600">Precio USD</th>
                </tr>
            </thead>
            <tbody>
                {
                    historyPetition.reverse().map(({ date, priceUsd, time }) => (
                        <tr key={time} className="bg-yellow-100">
                            <td className="border border-slate-700">{dayjs(date).format('DD/MM/YYYY')}</td>{/* toDateString() = Mon Jun 28 1993 / toString() = Mon Jun 28 1993 14:39:07 GMT-0600 (PDT) */}
                            <td className="border border-slate-700">${parseFloat(priceUsd).toFixed(3)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
};

export default CryptoHistory;