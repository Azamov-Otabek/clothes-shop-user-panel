import { Navigate } from "react-router-dom"
import { isAuthenticated } from "@cookie"
import { element } from "@globalinterface"

function index({element}: element) {
    return isAuthenticated()? <Navigate to="/" />: element
}

export default index