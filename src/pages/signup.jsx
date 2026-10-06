import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate()
    const users = props.users
    const setUsers = props.setUsers
    const [enteredUname, setEnteredUname] = useState()
    const [enteredPwd, setEnteredPwd] = useState()

    const handleUname = (event) => {
        setEnteredUname(event.target.value)
    }
    const handlePwd = (event) => {
        setEnteredPwd(event.target.value)
    }
    const handleAdduser = () => {
        setUsers([...users,{username:enteredUname, password:enteredPwd}])
        navigate("/")
    }

    return (

        <div className="bg-black px-10 py-20">
            <div className="bg-[#f4f9f9fb] p-10 rounded-md">
                <h1 className="text-2xl font-medium pb-2">Hey Hi 👋</h1>
                <p className="mb-3">You can Signup here :)</p>
                <div className="flex flex-col">
                    <input value={enteredUname} onChange={handleUname} type="text" className="border w-52 rounded-md p-1 my-2 shrink" placeholder="Username" />
                    <input value={enteredPwd} onChange={handlePwd} type="password" className="border w-52 rounded-md p-1 my-2 shrink" placeholder="Password" />
                    <input type="password" className="border w-52 rounded-md p-1 my-2 shrink" placeholder="Confirm Password" />
                    <button onClick={handleAdduser} className="bg-[#FCA201] w-30 my-2 text-center p-1 rounded-md">Sign up</button>
                    <p>Already have an account? <Link className="underline" to={"/"}>Login</Link></p>
                </div>
            </div>
        </div>

    )
}
export default Signup