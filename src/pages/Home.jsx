import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="pt-4 bg-blue-100 pl-20 h-screen">
            <div className="flex flex-col items-center">
                <h1>Bienvenido al portal de las cryptomonedas</h1>
                <p>Conoce las 100 crypto más famosas</p>
                <Link to="/cryptomonedas" className="bg-blue-500 p-3 rounded-md text-white hover:bg-blue-400 hover:duration-300">Ver cryptomonedas</Link>
            </div>
        </div>
    )
};

export default Home;
