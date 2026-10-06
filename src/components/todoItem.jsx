function TodoItem(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const handleDelete = (removeid) => {
        let filteredItem = activityArr.filter(function (item) {
            if (item.id === removeid) {
                return false
            }
            else {
                return true
            }
        })
        setActivityArr(filteredItem)
    }

    return (
        <div className="flex justify-between">
            <li key={props.index} className="text-md my-1">{props.index+1}. {props.activity}</li>
            <button onClick={() => handleDelete(props.id)} className="bg-red-600 text-sm rounded-4xl my-1 px-1.5 py-1.5">🗑</button>
        </div>
    )
}
export default TodoItem