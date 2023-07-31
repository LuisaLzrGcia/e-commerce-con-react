import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Layout/Navbar.jsx'
import User from './View/User/index.jsx'
import Login from './View/Login/index.jsx'
import PrivateRoute from './components/PrivateRoute/index.jsx'
import ProductDetail from './components/ProductDetail/index.jsx'
import Cart from "./View/Cart/index.jsx"
import CategoryMen from "./components/CategoryMen/index.jsx"
import CategoryWomen from "./components/CategoryWomen/index.jsx"
import NotFound from './View/NotFound/NotFound.jsx'
import Maintenance from './View/Maintenance/Maintenance.jsx'
import store from './hooks/Redux.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />

  },
  {
    path: 'producto/:id/:name',
    element: <ProductDetail />
  },
  {
    path: 'user',
    element:
      <PrivateRoute>
        <User />
      </PrivateRoute>
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'carrito',
    element: <Cart />,
  },
  {
    path: 'pagar',
    element: <Maintenance />
  },
  {
    path: 'ropa_hombre',
    element: <CategoryMen />
  },
  {
    path: 'ropa_mujer',
    element: <CategoryWomen />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar>
        <RouterProvider router={router} />
      </Navbar>
    </Provider>
  </React.StrictMode>
)
