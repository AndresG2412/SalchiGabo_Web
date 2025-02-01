import Navbar from "../components/Navbar";
import LogoSM from "../components/LogoSM";

export default function Adiciones() {

    const factura = () => {

    }

    return (
        <>
            <LogoSM />
            {/* <p className="text-center md:text-4xl text-white font-bold tracking-wider md:mt-12">Adiciones</p> */}
            <div className="md:mt-10 md:w-2/5 bg-white mx-auto rounded-lg border-2 border-b-4 border-black flex flex-col items-center text-center gap-y-4 py-8 text-xl font-semibold tracking-wide">
                <div className="text-2xl font-bold tracking-wider border-b-4 border-slate-900 pb-2">
                    <p>¿Deseas alguna adición?</p>
                    <p>Solo por $3.000 en tu pedido!</p>
                </div>

                <label className="flex items-center gap-x-2 hover:cursor-pointer hover:scale-110 hover:transition-all select-none">
                    <input type="checkbox" className="hover:cursor-pointer" />
                    Queso Fundido
                </label>

                <label className="flex items-center gap-x-2 hover:cursor-pointer hover:scale-110 hover:transition-all select-none">
                    <input type="checkbox" className="hover:cursor-pointer" />
                    Tocineta Crujiente
                </label>

                <label className="flex items-center gap-x-2 hover:cursor-pointer hover:scale-110 hover:transition-all select-none">
                    <input type="checkbox" className="hover:cursor-pointer" />
                    Huevos de Codorniz (x6)
                </label>

                <label className="flex items-center gap-x-2 hover:cursor-pointer hover:scale-110 hover:transition-all select-none">
                    <input type="checkbox" className="hover:cursor-pointer" />
                    Medallones de Plátano Dulce
                </label>

                {/* <p>La adicion se suma por aparte a cada salchipapa</p> */}

                <button 
                    onClick={factura}
                    className="mt-6 border-2 border-b-4 border-black py-2 px-4 text-xl tracking-wide font-bold rounded-lg hover:cursor-pointer hover:scale-110 hover:transition-all uppercase bg-green-200">Hacer Pedido!</button>
            </div>
            <Navbar />
        </>
    );
}