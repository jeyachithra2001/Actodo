import Cards from "../components/card"
import Header from "../components/header"
import Todocontainer from "../components/todoContainer"
import { useLocation } from "react-router-dom"

function Home() {

     const location = useLocation()
    const username = location.state?.username

    return (
        <>
            <div className="bg-black px-10 py-16">
                <div className="bg-[#f4f9f9fb] p-10 rounded-md">
                    <Header username = {username}/>
                    <div className="flex justify-between gap-5 my-5 flex-wrap">
                        <Cards bgcolor={"#8272DA"} title={"23°"} subtitle={"Chennai"} />
                        <Cards bgcolor={"#FD6663"} title={"October 29"} subtitle={"15.22.03"} />
                        <Cards bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                    </div>
                    <Todocontainer />
                </div>
            </div>
        </>
    )
}
export default Home