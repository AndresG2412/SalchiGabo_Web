import React, { useEffect } from "react";

//logo header
import LogoSM from "./components/LogoSM.jsx";

//componentes en uso
import Wpp from "./components/New/Wpp.jsx";
import CardV2 from "./components/New/CardV2.jsx";

//datos de json
import datos from "../datos.json";

//alerta de inicio
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
            </div>
        </div>
    );
}
