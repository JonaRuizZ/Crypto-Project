import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const changeData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data.email, data.password)
        axios.post(`https://reqres.in/api/login`, data)
        .then(res => {
            localStorage.setItem("Shhhh", res.data.token) // Guardar el token el localStorage, seteamos el item como "Shhhh" y como segundo parametro el valor ¿Dónde está el token? en res.data.token
        })// .then(res => console.log(res))
        .catch(err => console.error(`Ha ocurrido el siguiente error: ${err}`))
    };

    return (
        <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 h-screen pt-10">
            <div className="text-xl pb-10">
                <h1 className="text-2xl text-center">Iniciar sesión</h1>
                <p className="text-md text-gray-300 text-center">Para información de las cryptomonedas debes iniciar sesión</p>
            </div>
            <div className="grid grid-cols-2 mx-auto h-96 w-2/4 border-2 rounded-lg p-4 m-4 shadow-lg">
                <div className="bg-bitcoin bg-contain bg-no-repeat bg-right bgg-" />
                <form onSubmit={submit} className="flex flex-col gap-4 p-5 justify-center">
                    <div className="flex flex-col">
                        <label className="text-gray-300" htmlFor="email">Correo electrónico</label>
                        <input onChange={changeData} className="p-2 h-8 rounded-md  font-medium shadow-md" type="email" name="email" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-300" htmlFor="password">Contraseña</label>
                        <input onChange={changeData} className="p-2 h-8 rounded-md shadow-md" type="password" name="password" required />
                    </div>
                    <div>
                        <input type="submit" value="Ingresar" className="cursor-pointer bg-sky-500 py-2 rounded-md w-full text-white font-semibold hover:bg-sky-600 duration-500 shadow-md" />
                    </div>
                    <p className="text-xs text-gray-300">*No compartas tus datos</p>
                </form>
            </div>
        </div>
    )
};

export default Login;
