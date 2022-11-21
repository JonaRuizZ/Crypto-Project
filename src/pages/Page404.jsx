import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-center text-2xl">Error 404 NOT FOUND</h1>
            <h1 className="text-center text-xl">Página no encontrada</h1>
            <Link to='/' className="bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300 duration-300">Volver al inicio</Link>
        </div>
    )
};

export default Page404;
