import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cryptomoneda = () => {
    // El hook useParams nos devuelve los parametros que existen en la URL y esos parametros lo definimos en las rutas ":id"
    const params = useParams()
    const API_URL = import.meta.env.VITE_API_URL;
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then((data) => {
                console.log(data.data.data)
                setInfo(data.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    if (!info) return <span className="flex justify-center h-screen bg-blue-100">Cargando datos...</span>

    return (
        <>
            <div className="pl-20 flex flex-col items-center bg-blue-100 h-screen">
                <h1>Cryptomoneda "{params.id.toUpperCase()}"</h1>
                {
                    info.map(({ id, marketCapUsd, maxSupply, name, priceUsd, rank, supply, symbol, volumeUsd24Hr, vwap24Hr }) => (
                        <div>{id}</div>
                    ))
                }
                <Link to="/cryptomonedas" className="bg-blue-500 p-4 rounded-lg hover:bg-blue-400 duration-300 text-white">Volver atrás</Link>
            </div>
        </>
    )
};

export default Cryptomoneda;