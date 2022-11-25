import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-slate-700 pl-20 h-screen">
            <div className="flex flex-col items-center gap-2 justify-center h-2/4">
                <h1 className="text-2xl font-bold text-white">Bienvenido al portal de las cryptomonedas</h1>
                <p className="text-lg text-gray-400">Conoce las cryptomonedas más famosas</p>
                <Link to="/cryptomonedas" className=" bg-blue-500 p-3 rounded-md text-white hover:bg-blue-400 hover:duration-300">Ver cryptomonedas</Link>
            </div>
        </div>
    )
};

export default Home;
