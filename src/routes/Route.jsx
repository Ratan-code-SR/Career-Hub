import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main_Layouts from "../layouts/Main_Layouts";
import Statistics from "../pages/Statistics ";
import Applied_Jobs from "../pages/Applied_Jobs";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main_Layouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/applied-jobs',
                element: <Applied_Jobs />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])