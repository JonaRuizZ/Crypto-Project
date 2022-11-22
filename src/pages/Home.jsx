import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="pt-4 bg-blue-100 pl-20">
            <h1>Bienvenido al portal de las cryptomonedas</h1>
            <p>Conoce las 100 crypto más famosas</p>
            <Link>Ver cryptomonedas</Link>
        </div>
    )
};

export default Home;
