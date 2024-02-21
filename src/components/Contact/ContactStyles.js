// ContactStyles.js
import styled from 'styled-components';

export const ContactWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Divide en una columna para el formulario y dos columnas para el mapa e iconos */
  gap: 20px; /* Espacio entre las columnas */
  padding: 40px;
  background-color: #f9f9f9;
  margin-bottom: 100px;
  border: 1px solid blue;
`;
export const FilaSuperior = styled.div`
  grid-column: 1 / span 3;
  margin-bottom: 20px;
  position: relative;
  text-align: center;

  p{
    font-family: "Noto Sans";}
`;


export const ContactFormContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const Title = styled.span`
  font-size: 24px;
  margin-bottom: 10px;
  background-color: rgba(0, 123, 255, 0.6); /* Color de fondo del título con sombra */
  padding: 10px;
  border-radius: 5px;
    
  
`;

export const Description = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 120px;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 50px 20px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;





export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -20px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px; /* Espacio interno del título */
  border-radius: 5px;
  color: #fff; /* Color del texto del título */
  font-size: 24px;
  text-align: center;
  

`;

export const FormContact = styled.div`

  margin-top: 60px;

`;

export const MessageForm = styled.p`

    color: #666;
    font-size: 16px;
    margin-top:40px;
    font-family: "Noto Sans";

`;


export const TitleSection = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Comfortaa";


`;

export const InputStyled = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  border-bottom: 2px solid #ccc; /* Borde inferior */
  outline: none; /* Quita el contorno al hacer clic */
  background-color: transparent; /* Hace el input transparente */
  padding-bottom: 5px; /* Espacio entre el texto y el borde inferior */

  &:focus {
    border-bottom: 2px solid #007bff; /* Color azul al seleccionar */
  }

  &:focus + label {
    transform: translateY(-20px);
    font-size: 12px;
    color: #007bff; /* Color azul al seleccionar */
  }
`;
export const Label = styled.label`
  position: absolute;
  top: ${({ hasValue }) => (hasValue ? '-1px' : '20px')}; /* Cambia la posición dependiendo de si hay un valor en el input */
  left: 11%;
  transform: translateY(-40%);
  transition: all 0.3s ease;
  pointer-events: none;
  font-size: ${({ hasValue }) => (hasValue ? '12px' : '14px')}; /* Ajusta el tamaño del texto */
  color: ${({ hasValue }) => (hasValue ? '#aaa' : '#aaa')}; /* Cambia el color del texto */

  font-family: "Noto Sans";
  

  /* Cuando el input tiene el foco o tiene valor */
  & + ${InputStyled}:focus ~ &,
  & + ${InputStyled}:not(:placeholder-shown) ~ & {
    top: 15px; /* Mueve el texto arriba */
    font-size: 12px; /* Tamaño más pequeño */
    color: #007bff; /* Color del texto enfocado */
  }
`;

export const TextAreaStyled = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  border-bottom: 2px solid #ccc; /* Borde inferior */
  outline: none; /* Quita el contorno al hacer clic */
  background-color: transparent; /* Hace el textarea transparente */
  padding-bottom: 5px; /* Espacio entre el texto y el borde inferior */
  resize: none; /* Evita que se redimensione */
  font-family: "Noto Sans";

  &:focus {
    border-bottom: 2px solid #007bff; /* Color azul al seleccionar */
  }

  &:focus + label {
    transform: translateY(-20px);
    font-size: 12px;
    color: #007bff; /* Color del texto enfocado */
    top: 10px; /* Ajusta la altura cuando el textarea está activo */
  }
`;


export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;