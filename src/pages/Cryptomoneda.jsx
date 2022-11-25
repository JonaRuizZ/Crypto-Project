import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Cryptomoneda = () => {
    // El hook useParams nos devuelve los parametros que existen en la URL y esos parametros lo definimos en las rutas ":id"
    const params = useParams()
    const API_URL = import.meta.env.VITE_API_URL;
    const [info, setInfo] = useState({});
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then(data => {
                console.log(data.data.data)
                setInfo(data.data.data)
            })
            .catch((err) => {
                console.log(err)
            });

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then(data => {
                console.log(data.data.data)
                setHistory(data.data.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <>
            <div className="pl-16 bg-slate-700 h-full flex">
                <div className="bg-white h-1/2 w-1/3 rounded-lg m-5 p-3">
                    <h1 className="text-2xl font-bold">Cryptomoneda "{params.id.toUpperCase()}"</h1>
                    <span className="text-md text-gray-500">Ranking: {info.rank}</span>
                    {
                        // Como hemos declarado un objeto en el useState, lo pasamos a texto plano con el JSON.stringify
                        // JSON.stringify(info)
                    }
                    <ul className="pt-3">
                        <li>
                            <span>ID: {info.id}</span>
                        </li>
                        <li>
                            <span>Símbolo: {info.symbol}</span>
                        </li>
                        <li>
                            <span>Nombre completo: {info.name}</span>
                        </li>
                        <li>
                            <span>Cantidad disponible: {parseFloat(info.supply).toFixed(3)}</span>
                        </li>
                        <li>
                            <span>Cantidad total emitidos: {info.maxSupply ? `${parseFloat(info.maxSupply).toFixed(3)}` : "No data"}</span>
                        </li>
                        <li>
                            <span>Oferta por precio: ${parseFloat(info.marketCapUsd).toFixed(3)}</span>
                        </li>
                        <li>
                            <span>Transacciones en USD: ${parseFloat(info.volumeUsd24Hr).toFixed(3)}</span>
                        </li>
                        <li>
                            <span className="font-bold text-blue-500">Precio actual: ${parseFloat(info.priceUsd).toFixed(3)} USD</span>
                        </li>
                        <li>
                            <span className={`font-bold ${info.changePercent24Hr > 0 ? "text-green-500" : "text-red-500"}`}>Variación ultimas 24hrs: {parseFloat(info.changePercent24Hr).toFixed(3)}%</span>
                        </li>
                        <li>
                            <span>Precio medio ponderado últimas 24hrs: {info.vwap24Hr ? `$${parseFloat(info.vwap24Hr).toFixed(3)}` : "No data"}</span>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center pt-4">
                        <Link to="/cryptomonedas" className="bg-blue-500 p-4 rounded-lg hover:bg-blue-400 duration-300 text-white">Volver atrás</Link>
                    </div>
                </div>
                <table className="w-3/4 border-2 border-gray-400 text-center m-5">
                    <thead className="">
                        <tr className="bg-yellow-500">
                            <th className="border border-slate-600">Fecha</th>
                            <th className="border border-slate-600">Precio USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.reverse().map(({ date, priceUsd, time }) => (
                                <tr key={time} className="bg-yellow-100">
                                    <td className="border border-slate-700">{dayjs(date).format('DD/MM/YYYY')}</td>{/* toDateString() = Mon Jun 28 1993 / toString() = Mon Jun 28 1993 14:39:07 GMT-0600 (PDT) */}
                                    <td className="border border-slate-700">${parseFloat(priceUsd).toFixed(3)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Cryptomoneda;