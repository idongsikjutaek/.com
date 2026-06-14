import React from 'react';
import Logo from './Logo';
const NavBar = () => {
    return ( 
        <div className="flex items-center justify-between p-4 border-b-[1px] border-solid border-gray-200">
            <Logo className="w-30 h-auto bg-amber-400" />
            <nav>
                <ul className="flex space-x-6 text-lg font-medium">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;