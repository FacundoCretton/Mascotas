
import React from "react";
import {formatPrice} from '../../utils/formatPrice';
import {useDispatch} from 'react-redux';


import Button from "../UI/Button/Button"; 
import 'bootstrap/dist/css/bootstrap.min.css';


import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import { ButtonContainer, CardPrice, CardsStyle, ContainerPrice } from "./ProductsStyles";

/* <Button onClick={() => dispatch(addToCart({img, title, desc, price, id}))}>Agregar</Button>  */

const CardProducto = ({img, name, price, id}) => {
  
    const dispatch = useDispatch();
    return (



    <CardsStyle>
    <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" src={img} />

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
        <Card.Text>
          Diseño de sitio web para empresa ficticia de venta de entradas para eventos.
          Con este proyecto pude practicar y mejorar mis habilidades en HTML, CSS y recibir la certificación de Diseño Web de NUCBA
        </Card.Text>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Herramientas utilizadas</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          {/* <ListGroup.Item><img src={html1} alt="html" width="30px"/> HTML</ListGroup.Item>
          <ListGroup.Item><img src={css1} alt="css" width="30px"/> CSS</ListGroup.Item> */}
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
      <Card.Body>
        <ButtonContainer>
        <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button onClick={() => dispatch()}>Agregar</Button>
      </ContainerPrice>
      </ButtonContainer>
        </Card.Body>
        </Card>
    </CardsStyle>

  );
}

export default CardProducto;







