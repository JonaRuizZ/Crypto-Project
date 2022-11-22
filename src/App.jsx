import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => {
    return(
        <>
            <Menu />
            <Outlet />
        </>
    )
};

export default App;