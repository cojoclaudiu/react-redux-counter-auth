import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Counter from './Counter';

export default function App() {
  const isAuth = useSelector(state => state.auth.isAuthentificated);
  return (
    <>
      <Header />
      {isAuth && <Counter />}
    </>
  );
}
