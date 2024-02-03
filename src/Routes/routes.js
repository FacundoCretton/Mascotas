import React from 'react';
import {Routes as ReactDomRoutes, Route} from 'react-router-dom';
import DetalleProducto from '../components/Products/DetalleProductos';
import Carousell from '../components/Hero/Carousel';
import CardsProductos from '../components/Products/CardsProductos';
import Categorias from '../components/Categories/Categorias';




function Routes() {

    return(
        <ReactDomRoutes>
            <Route path= "/" element={<Home/>} />
            <Route path= "/productos/:id" element={<DetalleProducto/>} />
            <Route path="/productos" element={<CardsProductos/>} />





        </ReactDomRoutes>

    )


};


function Home(){
    return(
        <>
        <Carousell/>
        <Categorias/>
        <CardsProductos/>

        
        </>

    );
}


export default Routes;