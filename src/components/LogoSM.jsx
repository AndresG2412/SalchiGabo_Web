import React from "react";
import logo from '../images/logo_blanco.png'

export default function LogoSM() {
    return(
        <div className="md:hidden">
            <img src={logo} alt="logo_celular" className="w-screen"/>
            <p className="text-white text-center text-xl font-semibold tracking-wide">Las originales ve!</p>
        </div>
    );
}