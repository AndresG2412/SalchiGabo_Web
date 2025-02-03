import img from '../images/icons/comments.png'
import { useNavigate } from 'react-router'

export default function Btn(){
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    return(
        <button
            className='fixed bottom-5 left-5 bg-white rounded-full p-2 hover:scale-110 hover:transition-all'
            onClick={() => navigate("/comentarios")}>
            <img src={img} alt="image" className='w-10'/>
        </button>
    )
}