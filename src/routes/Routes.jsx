import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import MyBookings from "../pages/myBookings/MyBookings";
import Blogs from "../pages/blogs/Blogs";
import ContactUs from "../pages/contactUs/ContactUs";
import axios from "axios";
import { Suspense } from "react";
import DoctorDetails from "../pages/doctorDetails/DoctorDetails";

const dataPromise = axios.get('../Doctors.json');


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Suspense fallback={<span>loading.......</span>}>
           <Home dataPromise={dataPromise}></Home>
        </Suspense>
      },
      {
         path:'doctorDetails/:id',
         loader: ()=> fetch('../Doctors.json'),
         Component:DoctorDetails
      },
      {
        path:'myBookings',
        Component:MyBookings
      },
      {
        path:'blogs',
        Component:Blogs
      },
      {
          path:'contactUs',
          Component:ContactUs
      }
    ],
  },
]);
