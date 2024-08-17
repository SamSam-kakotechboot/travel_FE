import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import TicketDetail from './pages/TicketDetail';
import Cart from './pages/Cart';
import MyPage from './pages/MyPage';
import { cartAuthLoader, loginAuthLoader } from './utils/authAction';
import { homeLoader, myPageLoader, ticketLoader } from './utils/loader';
import { cartAction, ticketDetailAction } from './utils/actions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: 'login', element: <Login />, loader: loginAuthLoader },
      {
        path: 'tickets/:id',
        element: <TicketDetail />,
        loader: ticketLoader,
        action: ticketDetailAction,
      },
      {
        path: 'cart',
        element: <Cart />,
        loader: cartAuthLoader,
        action: cartAction,
      },
      { path: 'mypage', element: <MyPage />, loader: myPageLoader },
    ],
  },
]);
