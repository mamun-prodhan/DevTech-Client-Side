import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import CourseDetails from "../../Pages/Shared/CourseDetails/CourseDetails";
import CustomRoute from "../../Pages/Shared/CustomRoute/CustomRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/Faq/Faq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
                // loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
            },
            // {
            //     path: '/category/:id',
            //     element: <Category></Category>
            // },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <CustomRoute></CustomRoute>
            }
        ]
    }
])