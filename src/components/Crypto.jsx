import { useEffect, useState } from "react";
import axios from "axios";
import CardCrypto from "./CardCrypto";

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
            .catch((err) => {
                console.error(`Hubo un error en la petición ${err}`)
            })
    }, []); // El array vacío significa que se ejecute solo una vez+

    if (!Cryptos) return <span className="flex justify-center h-screen bg-slate-700 text-white font-bold text-2xl pt-4">Cargando datos...</span>

    return (
        <div className="pl-20 pr-5 bg-slate-700">
            <h1 className="text-center text-2xl p-5 text-white">Las 100 Cryptomonedas más famosas</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7">
                {
                    Cryptos.map(({ id, symbol, name, priceUsd, changePercent24Hr }) => (
                        //  <CardCrypto nombreCualquiera = { propiedad del JSON } />
                        //  El nombreCualquiera debe estar igual en el componente CardCrypto (CardCrypto.jsx en las props)
                        <CardCrypto key={id} symbol={symbol} name={name} priceUSD={priceUsd} changePercent={changePercent24Hr} id={id} />
                    ))
                }
            </ul>
        </div>
    )
};

export default Crypto;
