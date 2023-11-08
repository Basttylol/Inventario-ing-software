import React, {Component, useEffect, useState} from 'react'
import app from '../credenciales'
import { getAuth, signOut} from 'firebase/auth'
import '../Home.css'
import {getFirestore, doc, getDoc, getDocs, collection} from 'firebase/firestore';

const auth = getAuth(app)



export const Home = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const querydb = getFirestore();
            const querySnapshot = await getDocs(collection(querydb, 'products'));
            const dataArr = [];
    
            querySnapshot.forEach((doc) => {
              dataArr.push({ id: doc.id, ...doc.data() });
            });
    
            setData(dataArr); // Almacena todos los documentos en el estado 'data'
          } catch (error) {
            console.error('Error al recuperar los datos:', error);
          }
        };
    
        fetchData();
      }, []);





    return(
        <>
        <div className='container'>
            <div className="mb-3 mb-4 position-absolute top-50 start-50 translate-middle">
                <table className='table table-borderless'>
                    <thead>
                    <tr border="2   ">
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Marca</th>
                        <th>Pais</th>
                    </tr>

                    </thead>
                    <tbody>
                        {data.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.marca}</td>
                                <td>{producto.pais}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>   
                                    
                <button onClick={()=>signOut(auth)}>
                    Cerrar sesion
                </button>
            </div>
        </div>
        </>
    )

};


export default Home; 