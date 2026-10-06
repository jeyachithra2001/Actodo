import { useState } from "react"
import AddTodoForm from "./addTodoForm"
import TodoList from "./todoList"

function Todocontainer() {
    const [activityArr, setActivityArr] = useState([{id:1, activity:"Go for a walk"},{id:2, activity:"drink water"}])
    return (
        <div className="flex gap-5 flex-wrap">
            <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>
    )
}
export default Todocontainer