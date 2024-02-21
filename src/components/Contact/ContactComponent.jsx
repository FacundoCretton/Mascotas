// ContactComponents.js
import React, { useState } from 'react';
import { FormContact, FormContainer, IconsContainer, Input, InputStyled, InputWrapper, Label, MapContainer, MessageForm, SubmitButton, TextArea, TextAreaStyled } from './ContactStyles';
import { FaUser, FaEnvelope, FaPencilAlt } from 'react-icons/fa'; // Importa los iconos

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); // Estado para el correo electrónico
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  return (
    <FormContainer>
      <MessageForm>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic quam optio fuga iusto magni officiis sapiente atque cupiditate quasi.</MessageForm>
      <FormContact>
      <InputWrapper>
          <FaUser style={{ marginRight: '10px', color:"#939393", fontSize:"30px", marginBottom:"10px" }} />
          <InputStyled 
            type="text" 
            id="name" 
            placeholder=" "
            value={name} 
            onChange={handleNameChange} 
          />
          <Label htmlFor="name" hasValue={name}>Nombre</Label>
        </InputWrapper>
        <InputWrapper>
          <FaEnvelope style={{ marginRight: '10px', color:"#939393", fontSize:"30px" }} />
          <InputStyled 
            type="email" 
            id="email" 
            placeholder=" "
            value={email} // Utiliza el estado de email para el valor
            onChange={handleEmailChange} // Utiliza el manejador de cambios de email
          />
          <Label htmlFor="email" hasValue={email}>Correo electrónico</Label> {/* También puedes pasar hasValue para el email */}
        </InputWrapper>
        <InputWrapper>
          <FaPencilAlt style={{ marginRight: '10px', color:"#939393", fontSize:"30px" }} />
          <TextAreaStyled id="message" placeholder=" " />
          <Label htmlFor="message">Mensaje</Label>
        </InputWrapper>
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
