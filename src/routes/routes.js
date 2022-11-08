import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import AddService from "../components/pages/AddService";
import Home from '../components/pages/Home';
import Login from "../components/pages/Login";
import Reviews from "../components/pages/Reviews";
import Services from "../components/pages/Services";
import Signup from "../components/pages/Signup";
import SingleService from "../components/pages/SingleService";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <SingleService></SingleService>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Signup></Signup>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/service/add',
                element: <AddService></AddService>
            }
        ]
    }
])