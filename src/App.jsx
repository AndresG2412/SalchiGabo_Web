import { Routes, Route } from "react-router";

//rutas importadas
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Carrito from "./pages/Carrito.jsx"

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}