import React from 'react'
import { Routes,Route } from "react-router-dom";
import {Inicio} from "./Inicio";
import { ProductosLista } from './Productos';
import { ProductoDetalles } from './Productos/ProductoDetalles';
  

export const Paginas = () => {
  return (
  <section>
    <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/Productos'element={<ProductosLista/>} />
    <Route path='/Producto/:id'element={<ProductoDetalles/>} />

    </Routes>


  </section>
 )
}
