import CardCrypto from "./CardCrypto";
import usePetition from "../hooks/usePetition";

const Crypto = () => {
    const dataPetition = usePetition("assets")
    if (!dataPetition) return <span className="flex justify-center h-screen bg-slate-700 text-white font-bold text-2xl pt-4">Cargando datos...</span>
    return (
        <div className="pl-20 pr-5 bg-slate-700">
            <h1 className="text-center text-2xl p-5 text-white">Las 100 Cryptomonedas más famosas</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7">
                {
                    dataPetition.map(({ id, symbol, name, priceUsd, changePercent24Hr }) => (
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
