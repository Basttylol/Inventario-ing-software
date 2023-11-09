import React, {Component, useEffect, useState} from 'react'
import app from '../credenciales'
import { getAuth, signOut} from 'firebase/auth'
import '../Home.css'
import {getFirestore, doc, getDoc, getDocs, collection, deleteDoc} from 'firebase/firestore';

const auth = getAuth(app)



export const Home = () => {

    const [data, setData] = useState([]);
    const querydb = getFirestore();

    const eliminarDocumento= async (dato)=>{
        try{
            await deleteDoc(doc(querydb, "products", dato));
            console.log('Documento eliminado exitosamente')
            window.location.reload()
        }catch(error){
            console.error('Error al eliminar documento')
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
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
        <div className='container m-5'>
            <div className='mt-3 mb-3'>
            <button className=' btn btn-success '>Agregar Producto</button>
            </div>
            <div>
                <table className='table table-bordered'>
                    <thead>
                    <tr border="2">
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Marca</th>
                        <th>Pais</th>
                        <th>Crud</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((producto) => (
                            <tr key={producto.id} id={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.marca}</td>
                                <td>{producto.pais}</td>
                                <td>
                                <button className="btn btn-warning"><i className="bi bi-pencil-square"></i></button>
                                <button onClick={()=>eliminarDocumento(producto.id)} className="btn btn-danger ms-2"><i className="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>   
                                    
                <button className='btn btn-info' onClick={()=>signOut(auth)}>
                    Cerrar sesion
                </button>
            </div>
        </div>
        </>
    )

};


export default Home; 