import { useEffect, useState } from "react";
import axios from "axios";

const Crypto = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [Cryptos, setCryptos] = useState();

    useEffect(() => {
        // fetch(`${API_URL}assets`)
        // .then((res) => res.json()) // Convertimos la respuesta en un JSON
        axios.get(`${API_URL}assets`)
        .then((data) => {
            console.log(data.data.data) // La respuesta en json se llamará "data" e imprimímos la data
            setCryptos(data.data.data)
        })
        .catch(() => {
            console.error("Hubo un error en la petición")
        })
    }, []); // El array vacío significa que se ejecute solo una vez+

    if(!Cryptos) return <span>Cargando datos...</span>

    return (
        <>
            <h1 className="text-center text-2xl">Las 100 Cryptomonedas más famosas</h1>
            <ul>
                {
                    Cryptos.map(({ id, symbol, name, priceUsd }) => (
                        <li key={id}>Symbol: {symbol}, Name: {name}, PriceUSD {priceUsd}</li>
                    ))
                }
            </ul>
        </>
    )
};

export default Crypto;
