export default function CardV2({ruta, titulo, descripcion, precio}) {
    return(
        <div className="flex flex-col gap-6 justify-center items-center border-2 border-black bg-[#222] rounded-xl px-6 py-4">
            <img src={ruta} alt="salchi_img"  className="w-40 rounded-lg"/>
            <div className="text-center w-72">
                <p className="font-nunito font-bold text-2xl text-white">{titulo}</p>
                <p className="font-nunito font-semibold text-white mt-4">{descripcion}</p>
                <p className="font-nunito font-bold text-2xl text-white mt-4">$ {precio} pesos</p>
            </div>
            <button className="font-bold py-2 px-4 border-2 border-black bg-green-200 text-center rounded-lg">ORDENAR</button>
        </div>
    );
}