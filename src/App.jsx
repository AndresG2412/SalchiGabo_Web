import Card from "./components/Card.jsx";
import Panel from './components/Panel.jsx'
import NavbarMD from './components/NavbarMD.jsx'
import NavbarSM from "./components/NavbarSM.jsx";
import LogoSM from "./components/LogoSM.jsx";

import datos from "../datos.json";

export default function App() {
    return(
        <div>
            <div className="md:flex md:justify-between">
                <LogoSM/>
                <Panel/>
                {/* Contenedor para las cards */}
                    <div className="md:flex flex-wrap justify-center">
                        {datos.map((item) => (
                            <Card
                                key={item.id}
                                titulo={item.titulo}
                                descripcion={item.descripcion}
                            />
                        ))}
                    </div>
                <NavbarMD/>
                <NavbarSM/>
            </div>
        </div>
    );
}