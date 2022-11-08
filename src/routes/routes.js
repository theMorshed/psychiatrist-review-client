import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import AddService from "../components/pages/AddService";
import AllServices from "../components/pages/AllServices";
import Home from '../components/pages/Home';
import Login from "../components/pages/Login";
import Reviews from "../components/pages/Reviews";
import Services from "../components/pages/Services";
import Signup from "../components/pages/Signup";
import SingleService from "../components/pages/SingleService";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/all-services'),
                element: <AllServices></AllServices>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
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
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/service/add',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
])