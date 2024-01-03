import { Outlet } from "react-router-dom"
import Header from "./Header"


const Layout = () => {
  return (
    <>
    <Header></Header>
    <main>
        <Outlet></Outlet>
    </main>
    <footer></footer>
    </>
  )
  
}

export default Layout