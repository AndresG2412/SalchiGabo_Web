import add from "../../images/icons/add.png"
import send from "../../images/icons/enviar.png"


export default function CardV2({ruta, titulo, descripcion, precio}) {
    return(
        <div className="md:my-0 my-8">
            <div className="p-4 bg-gradient-to-br from-purple-950 to-black rounded-[20px] flex flex-col mx-6 w-auto shadow-[0_4px_15px_rgba(255,255,255,0.3)]">
                <img src={ruta} alt="salchi_img"  className="md:w-32 w-40 rounded-[15px] mx-auto"/>
                <div className="text-center md:w-72 mx-auto">
                    <p className="font-nunito font-bold text-3xl text-white tracking-wider mt-5 border-b-2 pb-1">{titulo}</p>
                    <p className="font-nunito font-semibold text-white mt-4 text-base md:h-24 flex items-center">{descripcion}</p>
                    <p className="font-nunito font-bold text-2xl text-white my-6 md:my-4">$ {precio} pesos</p>
                </div>
                <div className="flex justify-center gap-4">
                    <button className="flex items-center justify-center gap-2 font-bold py-2 shadow-2xl bg-[#cdf9dd] text-center rounded-[15px] w-36 hover:scale-110 transition-transform"><img src={send} alt="add" className="w-[30px]"/>ORDENAR</button>
                    <button className="flex items-center justify-center gap-2 font-bold py-2 shadow-2xl bg-[#f9f7cd] text-center rounded-[15px] w-36 hover:scale-110 transition-transform"><img src={add} alt="add" className="w-[25px]"/>AÑADIR</button>
                </div>
            </div>
        </div>
    );
}