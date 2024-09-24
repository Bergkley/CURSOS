import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// Pages
import Home from "./routes/Home.tsx";
import Repos from './routes/Repos.tsx'
import PageError from './routes/PageError.tsx'

const router = createBrowserRouter([
   {
    path: '/',
    element: <App/>,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/repos/:username',
        element: <Repos />,
      }
    ]
   }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
