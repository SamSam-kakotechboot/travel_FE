import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      {/* 공통 레이아웃 요소들 */}
      <Header />
      <Outlet /> {/* 자식 라우트가 렌더링되는 위치 */}
    </div>
  );
}

export default App;
