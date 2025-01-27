import { Routes, Route } from "react-router";

//rutas importadas
import Home from "./pages/Home.jsx";
import Carrito from "./pages/Carrito.jsx"
import Pedido from "./pages/Pedido.jsx"
import Comments from "./pages/Pedido.jsx"
import NotFound from "./pages/NotFound.jsx";

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/comentarios" element={<Comments />} />
            <Route path="/pedido" element={<Pedido />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}