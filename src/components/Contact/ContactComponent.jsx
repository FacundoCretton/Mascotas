// ContactComponents.js
import React from 'react';
import { FormContact, FormContainer, IconsContainer, Input, MapContainer, MessageForm, SubmitButton, TextArea } from './ContactStyles';

export const ContactForm = () => {
  return (
    <FormContainer>
        <MessageForm>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic quam optio fuga iusto magni officiis sapiente atque cupiditate quasi.</MessageForm>
        <FormContact>
            <Input type="text" placeholder="Nombre" />
            <Input type="email" placeholder="Correo electrónico" />
            <TextArea placeholder="Mensaje" />
            <SubmitButton>Enviar</SubmitButton>
        </FormContact>
    </FormContainer>
  );
};

export const Map = () => {
  return (
    <MapContainer>
      {/* Integra aquí tu mapa */}
    </MapContainer>
  );
};

export const ContactIcons = () => {
  return (
    <IconsContainer>
      {/* Agrega aquí los iconos de teléfono, correo electrónico y dirección */}
      <i className="fa fa-phone"></i>
      <i className="fa fa-envelope"></i>
      <i className="fa fa-map-marker"></i>
    </IconsContainer>
  );
};
