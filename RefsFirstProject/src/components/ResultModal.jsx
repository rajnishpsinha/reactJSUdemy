export default function ResultModal({result,targetTime}){

    return(
        <dialog className="result-modal" open>
        <h2>You {result}</h2>
        <p> Target time was <strong>{targetTime}</strong></p>  
        <p>You stopped the timer with <strong>X minutes left.</strong></p>
        
        <form method="dialogue">
            <button>close</button>
        </form>
        </dialog>
    )
}