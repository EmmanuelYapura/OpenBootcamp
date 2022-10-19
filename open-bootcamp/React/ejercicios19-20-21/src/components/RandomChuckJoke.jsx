import '../styles/RandomChuckJoke.css'
import { useState } from "react"
import { getUser } from "../service/axios-service"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

export function RandomChuckJoke() {

    const [joke, setJoke] = useState('');
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    async function obtainJoke() {
        // obtengo el objeto completo
        let takeJoke = await getUser()
        setJoke(takeJoke.data.value)
    }

    const cantLikes = () => {
        setLikes(likes + 1)
    }

    const cantDislikes = () => {
        setDislikes(dislikes + 1)
    }

    return (
        <div>
            {
                joke ?
                    (
                        <div>
                            <div className='joke-content'>
                                <p className='joke-text'>
                                    Joke : {joke}
                                </p>
                            </div>
                            <button onClick={cantLikes} className='btn-like'>
                               <ThumbUpOutlinedIcon />
                               {likes}
                            </button>
                            <button onClick={cantDislikes} className='btn-dislike'>
                                <ThumbDownOffAltOutlinedIcon />
                                {dislikes}
                            </button>
                        </div>
                    )
                    :
                    (
                        <p>Has click en el boton para obtener un chiste</p>
                    )
            }

            <button onClick={obtainJoke}> Joke </button>
        </div>
    )
}