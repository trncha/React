import { useContext } from "react"
import { Datacontext } from "../App"

const Menu = () => {
    const { setAppState } = useContext(Datacontext)

    return (
        <div className="menu">
            <h1>Quiz Before Class</h1>
            <button onClick={() => setAppState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu