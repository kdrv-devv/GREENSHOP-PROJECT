import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../components/home-component/main-layout";
import Shop from "../pages/shop";

export const root = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/shop/:category/:id",
                element:<Shop/>

            }

        ]
    }
])