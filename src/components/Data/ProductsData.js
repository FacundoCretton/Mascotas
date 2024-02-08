import React from 'react';

export const products = [

  {
    id: 1,
    name: (
      <React.Fragment>
        Perro adulto de raza grande <br /> <span style={{ fontSize: '0.8em' }}>PREMIUM</span>
      </React.Fragment>
    ),    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoPerros', 'Alimento'],
    price: 100,
    img:require('../../Assets/Productos/Alimentos/1.png'),
    stock: true

        
  },

  {
    id: 2,
    name: (
      <React.Fragment>
        Perro adulto de raza pequeña <br /> <span style={{ fontSize: '0.8em' }}>PREMIUM</span>
      </React.Fragment>
    ),    category: 'Perros',
    desc:'Acà va un texto de prueba',      
    //subcategory ['AlimentoPerros', 'Alimento'],
    price: 200,
    img:require('../../Assets/Productos/Alimentos/2.png'),
    stock: true,

  },

  {
    id: 3,
    name: (
      <React.Fragment>
        Gato adulto todas las razas <br /> <span style={{ fontSize: '0.8em' }}>URINARIO</span>
      </React.Fragment>
    ),    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoGatos', 'Alimento'],
    price: 300,
    img:require('../../Assets/Productos/Alimentos/101.png'),
    stock: true,
  },
    {
      id: 4,
      name: (
        <React.Fragment>
          Cachorro todas las razas <br /> <span style={{ fontSize: '0.8em' }}>PREMIUM</span>
        </React.Fragment>
      ),      
      category: 'Perros',
      desc:'Acà va un texto de prueba',
      //subcategory ['AlimentoGatos', 'Alimento'],
      price: 300,
      img:require('../../Assets/Productos/Alimentos/3.png')
    },
  {
    id: 5,
    name: (
      <React.Fragment>
        Perro adulto de raza pequeña <br /> <span style={{ fontSize: '0.8em' }}>HIPOALERGÉNICO</span>
      </React.Fragment>
    ),    
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoGatos', 'Alimento'],
    price: 300,
    img:require('../../Assets/Productos/Alimentos/4.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/4-D.png')

  },
  {
    id: 6,
    name: 'Alimento para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoGatos', 'Alimento'],
    price: 300,
    img:require('../../Assets/Productos/Alimentos/5.png')
  },
  {
    id: 7,
    name: 'Alimento para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoGatos', 'Alimento'],
    price: 300,
    img:require('../../Assets/Productos/Alimentos/6.png')
  },
  {
    id: 8,
    name: 'Alimento para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoGatos', 'Alimento'],
    price: 300,
    img:require('../../Assets/Productos/Alimentos/7.png')
  },


  {
    id: 9,
    name: 'Cucha para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['Cuchas', 'CuchasPerros'],
    price: 400,
    img:'/animales.jpg'
  },

  {
    id: 10,
    name: 'Cucha para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Cuchas', 'CuchasGatos'],
    price: 500,
    img:'/animales.jpg'
  },

  {
    id: 11,
    name: 'Juguete para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesPerros'],
    price: 600,
    img:'/animales.jpg'
  },

  {
    id: 12,
    name: 'Juguete para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesGatos'],
    price: 700,
    img:'/animales.jpg'

  },

  {
    id: 13,
    name: 'Cama para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['Camas', 'CamasPerros'],
    price: 800,
    img:'/animales.jpg'
  },

  {
    id: 14,
    name: 'Cama para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Camas', 'CamasGatos'],
    price: 900,
    img:'/animales.jpg'
  },

  {
    id: 15,
    name: 'Rascador para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesGatos'],
    price: 1000,
    img:'/animales.jpg'
  },

  {
    id: 16,
    name: 'Rascador para gatos 2',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesGatos' ],
    price: 1100,
    img:'/animales.jpg'
  },







]


// export const TotalProducts = Products.length;

// export const products = Products.reduce((acc, product) => {
//     if (!acc[product.category]) {
//         acc[product.category] = {};
//     }

//     if (!acc[product.category][product.subcategory]) {
//         acc[product.category][product.subcategory] = [];
//     }

//     acc[product.category][product.subcategory] = [
//         ...acc[product.category][product.subcategory],
//         product,
//     ];

//     return acc;
// }, {});

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});