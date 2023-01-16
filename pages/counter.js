import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'


export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username')
    const router = useRouter ();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser]) 

    return (
        <>
        <div class = "main-container2 ">

        <img id = "welcome" src = "https://www.vetcor.com/userfiles/images/blog/miscellaneous/welcome-700px.png"></img>

               <div class = "label"> Hello there! Welcome to the Counter Page </div>

        <div class = "label"> Welcome {isUser} </div>

        <div class = "label">{number}</div>

        <button onClick ={() =>setNumber(number + 1)}> Increment </button>
        <button  onClick ={() => setNumber(number - 1)}> Decrement </button>
        </div>
        </>
    )

}