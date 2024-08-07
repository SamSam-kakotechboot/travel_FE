import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Tickets from './pages/Tickets';
import TicketDetail from './pages/TicketDetail';
import Cart from './pages/Cart';
import MyOrder from './pages/MyOrder';
import { cartAuthLoader, loginAuthLoader } from './utils/authAction';
import { homeLoader } from './utils/loader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: 'login', element: <Login />, loader: loginAuthLoader },
      { path: 'tickets', element: <Tickets /> },
      { path: 'tickets/:id', element: <TicketDetail /> },
      { path: 'cart', element: <Cart />, loader: cartAuthLoader },
      { path: 'myorder', element: <MyOrder /> },
    ],
  },
]);
