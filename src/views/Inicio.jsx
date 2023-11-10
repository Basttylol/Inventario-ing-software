import React, { useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../../credenciales';

const auth = getAuth(app);

const Inicio = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUsuario(null); // Actualiza el estado del usuario después de cerrar sesión
      navigate('/Login'); // Redirige a la página de inicio de sesión después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  if (!usuario) {
    // Si no hay usuario, redirige a la página de inicio de sesión
    navigate('/Login');
    return null;
  }

  return (
    <>  
      <button className='btn btn-info' onClick={handleSignOut}>
        Cerrar sesión
      </button>
    </>
  );
};

export default Inicio;