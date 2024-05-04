import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Allfeatures from "./Features/Allfeatures";
import Alldownload from "./Download/Alldownload";
import Allabout from "./About/Allabout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Features",
    element: <Allfeatures/>,
  },
  {
    path: "Download",
    element: <Alldownload/>,
  },
  {
    path: "About",
    element: <Allabout/>,
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




//في حالة صفحة واحدة 
//import React from 'react';
//import ReactDOM from 'react-dom/client';

//import App from './App';


//var mohamed = ReactDOM.createRoot(document.getElementById('root'));
//mohamed.render(<App />);


