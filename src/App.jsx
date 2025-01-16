import Card from "./components/Card.jsx";
import Panel from './components/Panel.jsx'
import NavbarMD from './components/NavbarMD.jsx'
import NavbarSM from "./components/NavbarSM.jsx";
import LogoSM from "./components/LogoSM.jsx";
import ButtonSM from "./components/ButtonSM.jsx";

import CardV2 from "./components/New/CardV2.jsx";

import datos from "../datos.json";

export default function App() {
    return(
        <div>
            <div className="md:flex md:justify-between pb-24 md:pb-0">
                <LogoSM/>
                {/* <Panel/> */}
                {/* Contenedor para las cards */}
                <div className="md:flex flex-wrap justify-center">
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
                {/* <NavbarMD/>
                <NavbarSM/> */}
                <div className="flex justify-center mt-6 md:hidden">
                    <ButtonSM/>
                </div>
            </div>
        </div>
    );
}