import { useParams } from "react-router-dom";

const Cryptomoneda = () => {
    // El hook useParams nos devuelve los parametros que existen en la URL y esos parametros lo definimos en las rutas ":id"
    const params = useParams()

    return (
        <div className="pl-20">
            <h1>Soy la cryptomoneda... {params.id}</h1>
        </div>
    )
};

export default Cryptomoneda;