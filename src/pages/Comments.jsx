export default function Comments(){
    return(
        <div className="bg-white flex flex-col justify-center items-center gap-y-4  py-4 my-12 mx-auto rounded-lg md:w-1/5">
            <div>
                <p className="tracking-wide text-xl font-nunito font-semibold">Escribenos tu comentario!</p>
                <p className="tracking-wide text-xl font-nunito font-semibold border-b-2 border-[#222]">lo tendremos presente 😁</p>
            </div>
            <input type="text" placeholder="Nombre Completo" className="border-2 border-black rounded-lg py-2 px-3"/>
            <input type="email" placeholder="Correo Electronico" className="border-2 border-black rounded-lg py-2 px-3"/>
            <input type="text" placeholder="Escribe tu reseña!" className="border-2 border-black rounded-lg py-2 px-3"/>
            <button className="border-2 border-green-400 bg-green-500 py-2 px-4 rounded-lg">Enviar!</button>
        </div>
    );
}