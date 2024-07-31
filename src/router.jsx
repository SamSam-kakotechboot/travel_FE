import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Tickets from './components/Tickets';
import TicketDetail from './components/TicketDetail';
import Cart from './components/Cart';
import MyOrder from './components/MyOrder';
import ReviewForm from './components/ReviewForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'tickets', element: <Tickets /> },
      { path: 'tickets/:id', element: <TicketDetail /> },
      { path: 'tickets/:id/review-form', element: <ReviewForm /> },
      { path: 'cart', element: <Cart /> },
      { path: 'myorder', element: <MyOrder /> },
    ],
  },
]);

// 주의: `createRoot`로 감싸져 있는 ReactDOM.render가 main.jsx에서 올바르게 호출되어야 합니다.
