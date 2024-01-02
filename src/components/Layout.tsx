import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <>
    <header></header>
    <main>
        <Outlet></Outlet>
    </main>
    <footer></footer>
    </>
  )
  
}

export default Layout