import { Outlet } from "react-router-dom"
import NavBar from "../Pages/HomePage/NavBar/NavBar"
import Footer from "../Pages/HomePage/Footer/Footer"

function Main() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main