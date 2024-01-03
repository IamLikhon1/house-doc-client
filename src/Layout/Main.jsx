import { Outlet, useLocation } from "react-router-dom"
import NavBar from "../Pages/HomePage/NavBar/NavBar"
import Footer from "../Pages/HomePage/Footer/Footer"

function Main() {
  // login page without header and footer
  const location = useLocation();
  // console.log(location);
  // condition rendering function
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
  return (
    <div>
      {/* use condition rendering for login page no header footer */}
      {
        noHeaderFooter ||
        < NavBar ></NavBar>
      }
      <Outlet></Outlet>
      {
        noHeaderFooter ||
        <Footer></Footer>
      }
    </div>
  )
}

export default Main