import React, { useEffect } from "react";
import Card from "./components/Card.jsx";
import Panel from './components/Panel.jsx';
import NavbarMD from './components/NavbarMD.jsx';
import NavbarSM from "./components/NavbarSM.jsx";
import LogoSM from "./components/LogoSM.jsx";
import ButtonSM from "./components/ButtonSM.jsx";

import Wpp from "./components/New/Wpp.jsx";
import CardV2 from "./components/New/CardV2.jsx";
import Coments from "./components/New/Coments.jsx";

import datos from "../datos.json";

import Swal from 'sweetalert2';

export default function App() {
    
    useEffect(() => {
        Swal.fire({
            icon: "warning",
            title: "Solo por tiempo limitado",
            text: "¡Tenemos nuevas adiciones! Pregunta por ellas a nuestro número personal.",
            confirmButtonText: "Entendido!"
        });
    }, []); // [] asegura que se ejecute solo una vez al montar el componente

    return (
        <div>
            <div className="">
                <LogoSM />
                
                <div className="md:flex md:justify-center">
                    {datos.map((item) => (
                        <CardV2
                            key={item.id}
                            titulo={item.titulo}
                            descripcion={item.descripcion}
                            ruta={item.image}
                            precio={item.precio}
                        />
                    ))}
                </div>

                <Wpp />
                <Coments />
                {/* <NavbarMD/> */}
                {/* <NavbarSM/> */}
                {/* <div className="flex justify-center mt-6 md:hidden">
                    <ButtonSM/>
                </div> */}
            </div>
        </div>
    );
}
