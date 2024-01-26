
export const products = [

  {
    id: 1,
    name: 'Alimento para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoPerros', 'Alimento'],
    price: 100,
    img:'./animales.jpg'
        
  },

  {
    id: 2,
    name: 'Alimento para perros 2',
    category: 'Perros',
    desc:'Acà va un texto de prueba',      
    //subcategory ['AlimentoPerros', 'Alimento'],
    price: 200,
    img:'./animales.jpg'

  },

  {
    id: 3,
    name: 'Alimento para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['AlimentoGatos', 'Alimento'],
    price: 300,
    img:'./animales.jpg'
  },

  {
    id: 4,
    name: 'Cucha para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['Cuchas', 'CuchasPerros'],
    price: 400,
    img:'./animales.jpg'
  },

  {
    id: 5,
    name: 'Cucha para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Cuchas', 'CuchasGatos'],
    price: 500,
    img:'./animales.jpg'
  },

  {
    id: 6,
    name: 'Juguete para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesPerros'],
    price: 600,
    img:'./animales.jpg'
  },

  {
    id: 7,
    name: 'Juguete para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesGatos'],
    price: 700,
    img:'./animales.jpg'

  },

  {
    id: 8,
    name: 'Cama para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    //subcategory ['Camas', 'CamasPerros'],
    price: 800,
    img:'./animales.jpg'
  },

  {
    id: 9,
    name: 'Cama para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Camas', 'CamasGatos'],
    price: 900,
    img:'./animales.jpg'
  },

  {
    id: 10,
    name: 'Rascador para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesGatos'],
    price: 1000,
    img:'./animales.jpg'
  },

  {
    id: 11,
    name: 'Rascador para gatos 2',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    //subcategory ['Juguetes', 'JuguetesGatos' ],
    price: 1100,
    img:'./animales.jpg'
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