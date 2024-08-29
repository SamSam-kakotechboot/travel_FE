import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import TicketDetail from './pages/TicketDetail';
import Cart from './pages/Cart';
import MyPage from './pages/MyPage';
import {
  cartAuthLoader,
  checkMasterAccess,
  loginAuthLoader,
} from './utils/authAction';
import {
  homeLoader,
  myPageLoader,
  ProductLoader,
  ticketLoader,
} from './utils/loader';
import {
  cartAction,
  productAction,
  productEditAction,
  ticketDetailAction,
} from './utils/actions';
import ErrorPage from './pages/ErrorPage';
import ProductPage from './pages/Product';
import ProductEditPage from './pages/ProductEditPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: 'login', element: <Login />, loader: loginAuthLoader },
      {
        path: 'product',
        loader: checkMasterAccess,
        children: [
          {
            index: true,
            element: <ProductPage />,
            loader: ProductLoader,
            action: productAction,
          }, // 기본 경로에 ProductPage 렌더링
          {
            path: 'edit/:id',
            element: <ProductEditPage />,
            loader: ticketLoader,
            action: productEditAction,
          },
        ],
      },
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
