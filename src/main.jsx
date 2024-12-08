
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/layout/Root'
import {  RouterProvider } from 'react-router'
import render from './router/Routes'
import LoadingContext from './contexts/loading'

createRoot(document.getElementById('root')).render(

    <LoadingContext>
  <RouterProvider router={render}>
    <Root/> 
  </RouterProvider>
    </LoadingContext>
)
