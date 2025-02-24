import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'/about',
          element:<About></About>
        },
        {
          path:'/skills',
          element:<Skills></Skills>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/projects',
          element:<Projects></Projects>
        }
      ]
    },
  ]);

export default router