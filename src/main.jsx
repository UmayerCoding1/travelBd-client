
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/layout/Root'
import {  RouterProvider } from 'react-router'
import render from './router/Routes'
import LoadingContext from './utils/loading'
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById('root')).render(
<AuthProvider>
    <LoadingContext>
  <RouterProvider router={render}>
    <Root/> 
  </RouterProvider>
    </LoadingContext>
    </AuthProvider>
)
