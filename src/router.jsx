import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Tickets from './pages/Tickets';
import TicketDetail from './pages/TicketDetail';
import Cart from './pages/Cart';
import MyOrder from './pages/MyOrder';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'tickets', element: <Tickets /> },
      { path: 'tickets/:id', element: <TicketDetail /> },
      { path: 'cart', element: <Cart /> },
      { path: 'myorder', element: <MyOrder /> },
    ],
  },
]);
