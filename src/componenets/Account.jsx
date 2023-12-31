import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are signed out');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[800px] mx-auto my-16 p-4'>
      <h1 className='text-3xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleSignout} className='border px-6 py-2 my-4'>
        Sign Out
      </button>
    </div>
  );
};

export default Account;
