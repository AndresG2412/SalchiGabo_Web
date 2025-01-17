export default function CardV2({ruta, titulo, descripcion, precio}) {
    return(
        <div className="">
            <div className="p-4 bg-[#222] rounded-[20px] flex flex-col mx-6 w-auto">
                <img src={ruta} alt="salchi_img"  className="md:w-32 w-40 rounded-[15px] mx-auto"/>
                <div className="text-center md:w-72 mx-auto">
                    <p className="font-nunito font-bold text-2xl text-white tracking-wider mt-5 border-b-2 pb-1">{titulo}</p>
                    <p className="font-nunito font-semibold text-white mt-4 text-base md:h-24 flex items-center">{descripcion}</p>
                    <p className="font-nunito font-bold text-2xl text-white my-6">$ {precio} pesos</p>
                </div>
                <button className="font-bold py-2 px-4 shadow-2xl bg-green-200 text-center rounded-[15px]">ORDENAR</button>
            </div>
        </div>
    );
}