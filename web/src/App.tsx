import React from 'react';
import Login from './pages/Login';
// import Registrar from './pages/Registrar';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
      {/* <Registrar /> */}
      <GlobalStyle />
    </>
  );
}

export default App;
