import { Link } from "react-router-dom";

const CardCrypto = ({ symbol, name, priceUSD, changePercent }) => {
    return (
        <div className={changePercent > 0 ? "bg-green-200 rounded-lg flex flex-col" : "bg-red-200 rounded-lg flex flex-col"}>
            <h2 className={changePercent > 0 ? "bg-green-400 text-center p-3 rounded-t-lg font-semibold" : "bg-red-400 text-center p-3 rounded-t-lg font-semibold"}>{symbol}</h2>
            <div className="p-3">
                <p>Nombre: {name}</p>
                <p>Precio USD: ${parseFloat(priceUSD).toFixed(2)}</p>
                <p>Variación 24hrs: {parseFloat(changePercent).toFixed(2)}%</p>
            </div>
            <Link className="mb-3 mx-3 py-3 px-4 bg-blue-500 text-white text-center rounded-md hover:bg-blue-400 duration-300">Más información</Link>
        </div>
    )
};

export default CardCrypto;
