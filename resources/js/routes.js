import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import DashboardComponent from "./components/DashboardComponent";
import CreatePost from "./components/CreatePost";

export const routes = [
    {
        path: "/",
        name : "index",
        component:HomeComponent,
    },{
        path: "/home",
        name : "home",
        component:HomeComponent,
    },{
        path: "/login",
        name : "login",
        component:LoginComponent,
    },{
        path: "/dashboard",
        name : "dashboard",
        component:DashboardComponent,
        meta: {
            requiresAuth: true
        },
    },,{
        path: "/create-post",
        name : "create-post",
        component:CreatePost,
        meta: {
            requiresAuth: true
        },
    },
]
