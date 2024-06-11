import {Header, Footer } from "@components"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

function Index() {

  return (
    <>
    <ToastContainer/>
          <Header/>
          <Outlet/>
          <Footer/>
    </>
  )
}

export default Index