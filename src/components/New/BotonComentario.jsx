import img from '../../images/icons/comments.png'
import { Navigate } from 'react-router'

export default function BotonComentario() {

    return(
        <button className='absolute bg-white p-2 rounded-full left-5 bottom-5 hover:scale-110 hover:transition-all'>
            <img src={img} alt="img_comments" className='w-10'/>
        </button>
    )
}