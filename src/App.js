import {
  createBrowserRouter,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

//pages
import Home from "./pages/Home";
import SellOnSangere from "./pages/SellOnSangere";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import NotFound from './pages/NotFound';

//layouts
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="sell" element={<SellOnSangere />} >
        <Route path="signup" element={<Navigate to="signup" replace />} />
      </Route>
      <Route path="account" element={<Account />} />
      <Route path="cart" element={<Cart />} />
      <Route path="signup" element={<SignUp />} >
        <Route path="login" element={<Navigate to="login" replace />} />
      </Route>

      <Route path="login" element={<Login />} >
        <Route path="signup" element={<Navigate to="signup" replace />} />
      </Route>


      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
)


function App() {
  return (


    <RouterProvider router={router} />

  );
}

export default App
