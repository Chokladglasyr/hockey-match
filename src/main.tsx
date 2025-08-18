import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import Nils from './components/Nils'
import Home from './components/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "nils",
        element: <Nils eng={true} />
      },
      {path: "",
      element: <Home eng={true}/>
      }
    ]
  },
  {
    path: "/admin",
    errorElement: <div>Not found</div>,
    element: <Admin />
  },
])

createRoot(document.getElementById('root')as HTMLElement).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
