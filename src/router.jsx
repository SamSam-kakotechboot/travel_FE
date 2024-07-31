import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Tickets from './components/Tickets';
import TicketDetail from './components/TicketDetail';
import Cart from './components/Cart';
import MyOrder from './components/MyOrder';

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
