import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import Nils from './components/Nils'
import Home from './components/Home'
import Schedule from './components/Schedule'
import Form from './components/Form'
import { LanguageProvider } from './store/languageContext'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "nils",
        element: <Nils />
      },
      {path: "/",
      element: <Home />
      },
      {path: "theday",
        element: <Schedule />
      },
      {
        path: "signup",
        element: <Form />
      }
    ]
  },
  {
    path: "/admin",
    element: <Admin />
  },
])

createRoot(document.getElementById('root')as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>

    <RouterProvider router = {router} />
    </LanguageProvider>
  </StrictMode>,
)
