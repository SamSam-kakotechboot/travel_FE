import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Tickets from './pages/Tickets';
import TicketDetail from './pages/TicketDetail';
import Cart from './pages/Cart';
import MyPage from './pages/MyPage';
import { cartAuthLoader, loginAuthLoader } from './utils/authAction';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login />, loader: loginAuthLoader },
      { path: 'tickets', element: <Tickets /> },
      { path: 'tickets/:id', element: <TicketDetail /> },
      { path: 'cart', element: <Cart />, loader: cartAuthLoader },
      { path: 'mypage', element: <MyPage /> },
    ],
  },
]);
