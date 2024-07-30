import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Tickets from './components/Tickets';
import TicketDetail from './components/TicketDetail';
import Cart from './components/Cart';
import MyOrder from './components/MyOrder';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/:id" element={<TicketDetail />} />
        <Route path="/tickets/:id/review-form" element={<ReviewForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myorder" element={<MyOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
