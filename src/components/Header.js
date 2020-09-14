import React , { useState} from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return ( 
        <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/" className="text-black text-3xl font-black tracking-tight">
                <img alt="Logo"
                    className="h-16" 
                    src="https://i.ibb.co/nrRm0gV/pandemie-coronavirus-arretez-logo-epidemie-covid-19-icone-covid-19-alerte-epidemie-mondiale-81863-26.jpg" />
            </a>
        </div>

        <div className="block lg:hidden">
            <button onClick={onClick} className="flex items-center px-3 py-2 border bg-white rounded text-teal-600 border-white ">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

        <div className={`w-full flex-grow lg:flex items-center lg:w-auto" + ${isActive ? 'block' : 'hidden' } `}>
            <div className=" text-lg text-white font-bold lg:flex-grow">
                <NavLink to="/" exact className="block  hover:text-gray-800  mt-4 lg:inline-block lg:mt-0  mr-4">
                    Carte centres de dépistages
                 </NavLink>
                 <NavLink to="/cas" exact className="block  hover:text-gray-800  mt-4 lg:inline-block lg:mt-0  mr-4">
                    Informations
                 </NavLink>

            </div>
        </div>
    </nav>
     );
}
 
export default Header;