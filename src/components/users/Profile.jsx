import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
    const usuario = useContext(UserContext);
    // console.log(usuario)
    return (
        <div className="pl-20">
            <h1>Perfil de: { usuario.nombre } </h1>
            <p>Usuario desde: { usuario.fechaRegistro }</p>
        </div>
    )
};

export default Profile;
