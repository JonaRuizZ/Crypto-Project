import { Link, useParams } from "react-router-dom";

const CryptoinfoPetition = ({ infoPetition }) => {
        // El hook useParams nos devuelve los parametros que existen en la URL y esos parametros lo definimos en las rutas ":id"    
        const params = useParams();
        
    return (
        <div className="bg-white h-1/2 w-1/3 rounded-lg m-5 p-3">
            <h1 className="text-2xl font-bold">Cryptomoneda "{params.id.toUpperCase()}"</h1>
            <span className="text-md text-gray-500">Ranking: {infoPetition.rank}</span>
            {
                // Como hemos declarado un objeto en el useState, lo pasamos a texto plano con el JSON.stringify
                // JSON.stringify(infoPetition)
            }
            <ul className="pt-3">
                <li>
                    <span>ID: {infoPetition.id}</span>
                </li>
                <li>
                    <span>Símbolo: {infoPetition.symbol}</span>
                </li>
                <li>
                    <span>Nombre completo: {infoPetition.name}</span>
                </li>
                <li>
                    <span>Cantidad disponible: {parseFloat(infoPetition.supply).toFixed(3)}</span>
                </li>
                <li>
                    <span>Cantidad total emitidos: {infoPetition.maxSupply ? `${parseFloat(infoPetition.maxSupply).toFixed(3)}` : "No data"}</span>
                </li>
                <li>
                    <span>Oferta por precio: ${parseFloat(infoPetition.marketCapUsd).toFixed(3)}</span>
                </li>
                <li>
                    <span>Transacciones en USD: ${parseFloat(infoPetition.volumeUsd24Hr).toFixed(3)}</span>
                </li>
                <li>
                    <span className="font-bold text-blue-500">Precio actual: ${parseFloat(infoPetition.priceUsd).toFixed(3)} USD</span>
                </li>
                <li>
                    <span className={`font-bold ${infoPetition.changePercent24Hr > 0 ? "text-green-500" : "text-red-500"}`}>Variación ultimas 24hrs: {parseFloat(infoPetition.changePercent24Hr).toFixed(3)}%</span>
                </li>
                <li>
                    <span>Precio medio ponderado últimas 24hrs: {infoPetition.vwap24Hr ? `$${parseFloat(infoPetition.vwap24Hr).toFixed(3)}` : "No data"}</span>
                </li>
            </ul>
            <div className="flex items-center justify-center pt-4">
                <Link to="/cryptomonedas" className="bg-blue-500 p-4 rounded-lg hover:bg-blue-400 duration-300 text-white">Volver atrás</Link>
            </div>
        </div>
    )
};

export default CryptoinfoPetition;