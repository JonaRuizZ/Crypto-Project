import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        setUsuario({
            nombre: "Usuario",
            fechaRegistro: "22/mayo/2000"
        })
    }, []);
    return (
        <UserContext.Provider value={ usuario }>
            { children }
        </UserContext.Provider>
    )
};

export { UserContext, UserContextProvider }
