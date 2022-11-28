import CryptoInfo from "../components/infoPetition/CryptoInfo";
import CryptoHistory from "../components/infoPetition/CryptoHistory";
import { useParams } from "react-router-dom";
import usePetition from "../hooks/usePetition";

const Cryptomoneda = () => {
    // El hook useParams nos devuelve los parametros que existen en la URL y esos parametros lo definimos en las rutas ":id"    
    const params = useParams();
    const infoPetition = usePetition(`assets/${params.id}`);
    const historyPetition = usePetition(`assets/${params.id}/history?interval=d1`);

    return (
        <>
            <div className="pl-16 bg-slate-700 h-full flex">
                {   // Si info existe o me devuelve true (tiene datos). && = haga lo siguiente:
                    infoPetition && <CryptoInfo infoPetition = { infoPetition }/>

                    // O también la forma maás larga sería:
                    // info && (
                    //     <CryptoInfo />
                    // )
                }

                {   // Si history existe o me devuelve true (tiene datos). && = haga lo siguiente
                    historyPetition && <CryptoHistory historyPetition = { historyPetition } />

                    // O también la forma maás larga sería:                    
                    // history && (
                    //     <CryptoHistory />
                    // )
                }
            </div>
        </>
    )
};

export default Cryptomoneda;