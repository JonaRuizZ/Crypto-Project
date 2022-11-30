import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
    const usuario = useContext(UserContext);
    // console.log(usuario)
    return (
        <div className="text-white pl-20 text-center bg-slate-700 flex flex-col h-screen gap-2 pt-5">
            <h1 className="font-semibold">Usando el hook context con React :3</h1>
            <p className="text-white">Perfil de: "{ usuario.nombre }" </p>
            <p className="text-white">Usuario desde: { usuario.fechaRegistro }</p>
        </div>
    )
};

export default Profile;
