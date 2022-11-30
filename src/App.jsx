import { Navigate, Outlet } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => {
    // Si NO TENGO el token, entonces llevame al /login
    if (!localStorage.getItem("Shhhh")) return <Navigate to="/login" />

    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
};

export default App;