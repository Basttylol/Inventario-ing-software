import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './views/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../credenciales';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AuthenticatedApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user ? <App /> : <Login />;
};

root.render(
  <Router>
    <React.StrictMode>
      <AuthenticatedApp />
    </React.StrictMode>
  </Router>
);