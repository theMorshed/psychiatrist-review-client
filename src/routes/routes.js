import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from '../components/pages/Home';
import Login from "../components/pages/Login";
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
            }
        ]
    }
])