import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/authSlice';

export default function Header() {
  const isAuth = useSelector(state => state.auth.isAuthentificated);
  const dispatch = useDispatch();

  const loginHandle = () => dispatch(login());
  const logoutHandle = () => dispatch(logout());

  return (
    <header>
      <nav>
        <div>react @reduxjs/toolkit</div>
        {isAuth ? (
          <ul>
            <li>Profile</li>
            <li>Add post</li>
            <button onClick={logoutHandle}>Logout</button>
          </ul>
        ) : (
          <button onClick={loginHandle}>Login</button>
        )}
      </nav>
    </header>
  );
}
