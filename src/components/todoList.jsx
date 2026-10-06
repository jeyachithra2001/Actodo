import TodoItem from "./todoItem"

function TodoList(props) {  

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return (
        <>
            <div className="bg-[#BDB4EA] border rounded-md p-2 my-5 grow">
                <h1 className="text-xl font-medium my-1">Today's Activitity</h1>
                {
                    activityArr.length === 0 && <p className="text-sm text-gray-800">You havn't added any activity yet</p>
                }
                <ul>
                {
                    activityArr.map(function(item, index){
                        return <TodoItem index={index} activity = {item.activity} id={item.id} activityArr = {activityArr} setActivityArr = {setActivityArr}/>
                    })
                }
                </ul>
            </div>
        </>
    )
}
export default TodoList