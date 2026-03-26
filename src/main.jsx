import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';
import Changelog from './Components/Changelog/Changelog.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Download from './Components/Download/Download.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: App},
      {path: "faq", Component: FAQ},
      {path: "changelog", Component: Changelog},
      {path: "blog", Component: Blog},
      {path: "download", Component: Download},
      {path: "contact", Component: Contact},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
