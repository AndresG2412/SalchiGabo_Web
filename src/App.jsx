import Card from "./components/Card.jsx";
import Panel from './components/Panel.jsx'
import NavbarMD from './components/NavbarMD.jsx'
import NavbarSM from "./components/NavbarSM.jsx";
import LogoSM from "./components/LogoSM.jsx";

import datos from "../datos.json";

export default function App() {

    return(
        <div className="md:flex md:justify-between">
                <LogoSM/>
                <Panel/>
                <NavbarMD/>
                <NavbarSM/>
        </div>
    );
}