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
                element: <Courses></Courses>
            },
            // {
            //     path: '/category/:id',
            //     element: <Category></Category>
            // },
            {
                path: '/course/:id',
                element: <Course></Course>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])