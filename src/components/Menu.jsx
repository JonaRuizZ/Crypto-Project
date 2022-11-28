import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from '../../icons/inversion.png'

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleBar = () => {
        setOpen(!open)
    }
    return (
        <nav className="bg-gray-600 fixed h-screen border-r border-gray-500">
            <ul className={`${!open ? "w-16 ease-in duration-500" : "w-64 ease-out duration-700"}`} >
                <li className="flex border-b border-gray-500 justify-between">
                    {
                        <NavLink to="/" className={`${open ? "px-5 flex items-center" : "hidden"}`}>
                            <img src={icon} alt="Logo inversion" className="w-12" />
                        </NavLink>
                    }
                    <NavLink onClick={handleBar} className="p-5 hover:bg-gray-700 hover:duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </NavLink>
                </li>
                <li className="hover:bg-gray-700 duration-300 flex">
                    <NavLink to="/" className="p-5 w-full grid grid-cols-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        {
                            <p className={`${open ? "text-gray-300 font-semibold" : "hidden"}`}>Home</p>
                        }
                    </NavLink>
                </li>
                <li className="hover:bg-gray-700 duration-300 flex">
                    <NavLink to="/cryptomonedas" className="p-5 w-full grid grid-cols-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {
                            <p className={`${open ? "text-gray-300 font-semibold" : "hidden"}`}>Cryptomonedas</p>
                        }
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
};

export default Menu;
