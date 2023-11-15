import React, {useState, useEffect, useRef } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 



const Agregar =()=>{

    const nombreRef = useRef()
    const cantidadRef = useRef()
    const marcaRef = useRef()
    const paisRef = useRef()

    const agregarProducto = async () => {
        // Assuming nombreRef, cantidadRef, marcaRef, paisRef are references to input elements
        const nombre = nombreRef.current.value;
        const cantidad = cantidadRef.current.value;
        const marca = marcaRef.current.value;
        const pais = paisRef.current.value;
      
        const querydb = getFirestore();

        if(nombre==="" || cantidad==="" || marca==="" || pais===""){
            alert("Debe ingresar los 4 campos")
            return;
        }
        try {
          // Use the actual values instead of refs
          await addDoc(collection(querydb, "products"), {
            nombre: nombre,
            cantidad: cantidad,
            marca: marca,
            pais: pais
          });
          alert("Producto ingresado correctamente!")
          
        } catch (error) {
          alert("No se pudo ingresar el producto")
        }

        nombreRef.current.value="";
        cantidadRef.current.value="";
        marcaRef.current.value="";
        paisRef.current.value="";

      };
    return(
        <>

            <div className="card text-center position-absolute top-50 start-50 translate-middle">
                <div className="card-header">
                    Usted esta ingresando un producto nuevo
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
                <div className="card-footer text-body-secondary" onClick={agregarProducto}>
                    <button className="btn btn-primary">Ingresar Producto</button>
                </div>
            </div>


        </>
    );
}

export default Agregar;