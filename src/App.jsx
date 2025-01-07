import Card from "./components/Card.jsx";
import Panel from './components/Panel.jsx'
import Navbar from './components/Navbar.jsx'

import datos from "../datos.json";

export default function App() {

    return(
        <div className="md:flex md:justify-between">
                <Panel/>
            <div className="mt-12">
                {datos.map((item, index) => (
                    <Card id={index} titulo={item.titulo} descripcion={item.descripcion} />
                ))}
            </div>
                <Navbar/>
        </div>
    );
}