import { createBrowserRouter } from "react-router-dom";
import Main_Layouts from "../layouts/Main_Layouts";
import Blog from "../pages/Blog";
import Applied_jobs from '../pages/Applied_Jobs'
import Home from "../pages/Home";
import Job_details from "../pages/Job_details";
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
                path: '/applied',
                element: <Applied_jobs/>,
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/job/:id',
                element: <Job_details />,
                loader: ()=> fetch(`/public/jobs.json`)
            }
        ]
    }
])