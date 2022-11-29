import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [data, setData] = useState();
    useEffect(() => {
        setData({
            nombre: "Jonathan Zacarías",
            fechaRegistro: "22/mayo/2000"
        })
    });
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
};

export default { UserContext, UserContextProvider }