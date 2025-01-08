import Card from "./components/Card.jsx";
import Panel from './components/Panel.jsx'
import Navbar from './components/Navbar.jsx'

import datos from "../datos.json";

export default function App() {

    return(
        <div className="md:flex md:justify-between">
                <Panel/>
                <Navbar/>
        </div>
    );
}