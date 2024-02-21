// ContactSection.js
import React from 'react';
import { ContactForm, Map, ContactIcons } from './ContactComponent';
import { ContactContainer, ContactFormContainer, ContactWrapper, Description, FilaSuperior, InformacionContacto, MapContainer, Title, TitleBackground, TitleSection } from './ContactStyles';
import { FaEnvelope } from 'react-icons/fa';


const ContactSection = () => {
  return (
    <>

    <ContactWrapper>
    <FilaSuperior>
        <TitleSection>Contáctanos</TitleSection>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iure, sunt nulla porro qui numquam adipisci minima impedit odio similique, totam doloremque eos veritatis nesciunt rerum molestiae, quo nisi culpa!</Description>
    </FilaSuperior>
      <ContactContainer>

        
        <InformacionContacto>
            <h2>Información de contacto</h2>


        </InformacionContacto>
        
      </ContactContainer>
      <MapContainer>
        
        <ContactFormContainer>
            
            <TitleBackground><Title><FaEnvelope style={{ marginRight: '5px' }} />
            Escribinos!</Title>
            </TitleBackground>
          <ContactForm />
        </ContactFormContainer>
        
        <ContactIcons />
      </MapContainer>
    </ContactWrapper>
    </>
  );
};

export default ContactSection;
