import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './componenets/SignIn';
import SignUp from './componenets/SignUp';
import Account from './componenets/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './componenets/ProtectedRoute';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Firebase & Authentication
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
