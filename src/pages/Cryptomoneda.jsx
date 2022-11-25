import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
            })
    }, []);

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then(data => {
                console.log(data.data.data)
                setHistory(data.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    if (!info || !history) return <span className="flex justify-center h-screen bg-blue-100">Cargando datos...</span>

    return (
        <>
            <div className="pl-20 flex flex-col items-center bg-blue-100 h-full">
                <h1>Cryptomoneda "{params.id.toUpperCase()}"</h1>
                <div>
                    {
                        // Como hemos declarado un objeto en el useState, lo pasamos a texto plano con el JSON.stringify
                        // JSON.stringify(info)
                    }
                    <ul>
                        <li>
                            <span>ID: {info.id}</span>
                        </li>
                        <li>
                            <span>Rank: {info.rank}</span>
                        </li>
                        <li>
                            <span>Symbol: {info.symbol}</span>
                        </li>
                        <li>
                            <span>Name: {info.name}</span>
                        </li>
                        <li>
                            <span>Supply: {info.supply}</span>
                        </li>
                        <li>
                            <span>maxSupply: {info.maxSupply}</span>
                        </li>
                        <li>
                            <span>marketCapUsd: {info.marketCapUsd}</span>
                        </li>
                        <li>
                            <span>volumeUsd24Hr: {info.volumeUsd24Hr}</span>
                        </li>
                        <li>
                            <span>priceUsd: {info.priceUsd}</span>
                        </li>
                        <li>
                            <span>changePercent24Hr: {info.changePercent24Hr}</span>
                        </li>
                        <li>
                            <span>vwap24Hr: {info.vwap24Hr}</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>History</span>
                        </li>
                        <li>
                            <span>{JSON.stringify(history)}</span>
                        </li>
                    </ul>
                </div>
                <Link to="/cryptomonedas" className="bg-blue-500 p-4 rounded-lg hover:bg-blue-400 duration-300 text-white m-4">Volver atrás</Link>
            </div>
        </>
    )
};

export default Cryptomoneda;