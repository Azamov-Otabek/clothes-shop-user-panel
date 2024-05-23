import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {Login, Register} from '@pages'
import App from "../App";
import Layout from '@layout'

export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<App/>}>
                <Route index element={<Layout/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Route>
        )
    )
    return <RouterProvider router={root} />
}