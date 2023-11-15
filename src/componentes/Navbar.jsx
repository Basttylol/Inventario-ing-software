import React, { useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../../credenciales';

const auth = getAuth(app);

const Navbar = () => {
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
      setUsuario(null);
      navigate('/Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };
  
  if (!usuario) {
    navigate('/Login');
    return null;
  }
  
  return (
    <> 
        <div className='navbar'>
            <button className='' onClick={handleSignOut}>
            Cerrar sesión
            </button>
        </div> 

    </>
  );
}

export default Navbar;