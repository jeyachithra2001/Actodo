import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate = useNavigate()
    const users = props.users
    const [enteredUname, setEnteredUname] = useState()
    const [enteredPwd, setEnteredPwd] = useState()
    const [regUser, setRegUser] = useState(true)

    const handleUname = (event) => {
        setEnteredUname(event.target.value)
    }
    const handlePwd = (event) => {
        setEnteredPwd(event.target.value)
    }
    const handleCheck = () => {
        const found =users.some((user) => user.username === enteredUname && user.password === enteredPwd)
        if (found) {
            console.log("Success")
            navigate("/home",{state:{username:enteredUname}})
        }
        else {
            console.log("Failed");
            setRegUser(false)
        }
    }

return (
    <div className="bg-black px-10
         py-30">
        <div className="bg-[#f4f9f9fb] p-10 rounded-md">
            <h1 className="text-2xl font-medium pb-2">Hey Hi 👋</h1>
            {
                regUser ? <p className="mb-3">I help you manage your Activities after you Login :)</p>
                    : <p className="text-red-600 mb-3">Please Sign up before you Login!!</p>
            }
            <div className="flex flex-col">
                <input value={enteredUname} onChange={handleUname} type="text" className="border w-52 rounded-md p-1 my-2 shrink" placeholder="Username" />
                <input value={enteredPwd} onChange={handlePwd} type="password" className="border w-52 rounded-md p-1 my-2 shrink" placeholder="Password" />
                <button onClick={handleCheck} className="bg-[#8272DA] w-30 my-2 text-center p-1 rounded-md">Login</button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
        </div>
    </div>
)
}
export default Login