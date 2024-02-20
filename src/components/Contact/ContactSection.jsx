// ContactSection.js
import React from 'react';
import { ContactForm, Map, ContactIcons } from './ContactComponent';
import { ContactContainer, ContactFormContainer, ContactWrapper, Description, FilaSuperior, MapContainer, Title, TitleBackground, TitleSection } from './ContactStyles';
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

        
        <ContactFormContainer>
            
            <TitleBackground><Title><FaEnvelope style={{ marginRight: '5px' }} />
                Contáctanos</Title>
            </TitleBackground>
          <ContactForm />
        </ContactFormContainer>
        
      </ContactContainer>
      <MapContainer>
        <Map />
        
        
        <ContactIcons />
      </MapContainer>
    </ContactWrapper>
    </>
  );
};

export default ContactSection;
