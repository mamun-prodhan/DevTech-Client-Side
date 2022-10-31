import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login";

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
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])