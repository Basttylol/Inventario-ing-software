import React, {useRef, useEffect} from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { doc, updateDoc, getFirestore } from "firebase/firestore";




const Editar = () =>{

    const setDefaultValues = () => {
        nombreRef.current.defaultValue = dato.nombre;
        cantidadRef.current.defaultValue = dato.cantidad;
        marcaRef.current.defaultValue = dato.marca;
        paisRef.current.defaultValue = dato.pais;
    };

    // Call the function to set default values when the component mounts
    useEffect(() => {
        setDefaultValues();
    }, []);


    const navigate = useNavigate();
    const nombreRef = useRef()
    const cantidadRef = useRef()
    const marcaRef = useRef()
    const paisRef = useRef()
    const { state: dato } = useLocation();

    const querydb = getFirestore();

    
    const productoNuevo = doc(querydb, "products", dato.id);
 
    const cancelar = async () =>{
        navigate('/inventario');
        alert("Accion cancelada")
    }

    const editarProducto = async () =>{ 
        
        const nombre = nombreRef.current.value;
        const cantidad = cantidadRef.current.value;
        const marca = marcaRef.current.value;
        const pais = paisRef.current.value;
        
        if(nombre==="" || cantidad==="" || marca==="" || pais===""){
            alert("Debe ingresar los 4 campos")
            return;
        }
    
        try{
            
            await updateDoc(productoNuevo, {
                nombre: nombre,
                cantidad: cantidad,
                marca: marca,
                pais : pais
                });
            alert("Producto editado correctamente")
            navigate('/inventario');
        }catch(error){
            alert("No se pudo editar el producto")
        }

    }
    return(
        <>

            <div className="card text-center position-absolute top-50 start-50 translate-middle">
                <div className="card-header">
                    Usted esta editando un producto nuevo
                </div>
                <div className="card-body">
                <form id="form" className="row " >
                        <div className="row mb-3">
                            <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input ref={nombreRef} type="text" className="form-control"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="cantidad" className="col-sm-2 col-form-label">Cantidad</label>
                            <div className="col-sm-10">
                                <input ref={cantidadRef} type="number" className="form-control"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="marca" className="col-sm-2 col-form-label">Marca</label>
                            <div className="col-sm-10">
                                <input ref={marcaRef} type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="pais" className="col-sm-2 col-form-label">Pais</label>
                            <div className="col-sm-10">
                                <input ref={paisRef} type="text" className="form-control" />
                            </div>
                        </div>
                            
                </form>
                </div>
                <div className="card-footer text-body-secondary" >
                    <button onClick={editarProducto} className="btn btn-primary">Editar Producto</button>
                    <button onClick={cancelar} className="btn btn-danger ms-5">Cancelar</button>

                </div>
            </div>


        </>
    );
}

export default Editar;