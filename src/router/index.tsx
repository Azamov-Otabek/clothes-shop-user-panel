import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {Login, Register, LoginProtected, SinglePage} from '@pages'
import App from "../App";
import Layout from '@layout'

export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<App/>}>
                <Route index element={<Layout/>}></Route>
                <Route path="/aboutproduct" element={<SinglePage/>}/>
                <Route path='/login' element={<LoginProtected element={<Login/>}/>}/>
                <Route path='/register' element={<LoginProtected element={<Register/>}/>}/>
            </Route>
        )
    )
    return <RouterProvider router={root} />
}