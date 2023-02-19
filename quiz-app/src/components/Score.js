import { Datacontext } from "../App"
import { useContext } from "react"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
    const { score, setAppState, setScore } = useContext(Datacontext)

    const restartApp = () => {
        setScore(0)
        setAppState("menu")
    }

    return (
        <div className="score">
            <h1>Score Summary</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>Return Quiz</button>
        </div>
    )
}

export default Score