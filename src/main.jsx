
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/layout/Root'
import { BrowserRouter, RouterProvider } from 'react-router'
import render from './router/Routes'

createRoot(document.getElementById('root')).render(

  <RouterProvider router={render}>
    <Root/>
  </RouterProvider>
)
