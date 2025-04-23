import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import MyBookings from "../pages/myBookings/MyBookings";
import Blogs from "../pages/blogs/Blogs";
import ContactUs from "../pages/contactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
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
