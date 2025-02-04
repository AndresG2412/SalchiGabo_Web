import React from "react";
import logo from '../images/logo_blanco.png'

export default function LogoSM() {
    return(
        <div className="py-6">
            <img src={logo} alt="logo_celular" className="md:w-4/12 w-4/5 mx-auto"/>
            <p className="text-white text-center text-xl font-semibold tracking-wide">Las originales ve!</p>
        </div>
    );
}