import { useState } from "react"

function AddTodoForm(props) {

    const [newActivity, setNewActivity] = useState("")

    const handleChange = (event) => {
        setNewActivity(event.target.value)
    }

    const handleAddButton = () => {
        setActivityArr([...activityArr,{id:activityArr.length+1, activity:newActivity}])
    }

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return (
        <>
            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-bold">Manage Activities</h2>
                <div>
                    <input value={newActivity} onChange={handleChange} className="border p-1 bg-white rounded-sm" placeholder="New activity?" />
                    <button onClick={handleAddButton} className="bg-black border-2 text-white rounded-sm p-1">Add</button>
                </div>
            </div>
        </>
    )
}
export default AddTodoForm