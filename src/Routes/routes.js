import React from 'react';
import {Routes as ReactDomRoutes, Route} from 'react-router-dom';
import DetalleProducto from '../components/Products/DetalleProductos/DetalleProductos';
import Carousell from '../components/Hero/Carousel';
import CardsProductos from '../components/Products/CardsProductos';
import { PreguntasFrecuentes } from '../components/Faqs/PreguntasFrecuentes';
import ListProductos from '../components/Products/ListProductos/ListProductos';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';




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
        <CardsProductos/>
        <PreguntasFrecuentes/> 
        <ContactSection/>

        
        </>

    );
}


export default Routes;