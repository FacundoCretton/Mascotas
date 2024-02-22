// Date: 15/02/24 17:36.
import bone from '../Products/ListProductos/icons/bones.svg'
import hair1 from '../Products/ListProductos/icons/hair.ico'
import energy from '../Products/ListProductos/icons/heart.svg'
import vitalidad from '../Products/ListProductos/icons/veterinary.svg'
import intestinal from '../Products/ListProductos/icons/bowels.svg'
import stomach from '../Products/ListProductos/icons/stomach.png'
export const beneficiosIconos = {
  energia: energy,
  pelos: hair1,
  huesos: bone,
  vitalidad: vitalidad,
  intestinal: stomach
};
export const products = [

  {
    id: 1,
    name: "Perro adulto de raza grande",
    tags: ["PREMIUM"],    
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 100,
    img:require('../../Assets/Productos/Alimentos/1.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/1-D.png'),
    stock: true,
    beneficios: [
      { nombre: 'Energia y Vitalidad', icono: energy },
      { nombre: 'Pelo Brillante', icono: hair1 },
      { nombre: 'Huesos Fuertes', icono: bone },
      { nombre: 'Salud Intestinal', icono: stomach }
    ]
        
  },

  {
    id: 2,
    name: "Perro adulto de raza pequeña ",
    tags: ["PREMIUM"],    
    category: 'Perros',
    desc:'Acà va un texto de prueba',      
    subcategory: 'Alimentos',
    price: 200,
    img:require('../../Assets/Productos/Alimentos/2.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/2-D.png'),
    stock: true,

  },

  {
    id: 3,
    name: "Gato adulto todas las razas", 
    tags:["URINARIO"],    
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/101.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/101-D.png'),
    stock: true,
  },
  {
    id: 4,
    name:"Cachorro todas las razas", 
    tags:["PREMIUM"],      
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/3.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/3-D.png'),
    stock: false,

  },
  {
    id: 5,
    name:"Perro adulto de raza pequeña", 
    tags:["HIPOALERGÉNICO"],    
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/4.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/4-D.png'),
    stock: false,


  },
  {
    id: 6,
    name: 'Perro adulto de raza grande',
    tags: ["HIPOALERGÉNICO"],
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/5.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/5-D.png'),
    stock: false,

  },
  {
    id: 7,
    name: 'Perro adulto raza gigante',
    tags: ["PREMIUM"],
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/6.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/6-D.png'),
    stock: false,

  },
  {
    id: 8,
    name: 'Gato adulto todas las razas',
    tags: ["PREMIUM"],
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/102.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/102-D.png'),
    stock: false,

  },
  {
    id: 9,
    name: 'Cachorro de raza Gigante',
    tags: ["PREMIUM"],
    category: 'Perros',
    desc:'Perros que en edad adulta van a tener un peso de +40 kg',
    subcategory: 'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/7.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/7-D.png'),
    stock: false,

  },
  {
    id: 10,
    name: 'PERRO ADULTO RAZA GRANDE CONTROL DE PESO',
    tags: ["PREMIUM"],
    category: 'Perros',
    desc:'Perros que en edad adulta van a tener un peso de +40 kg',
    subcategory: 'Alimentos',
    price: 300,
    img:require('../../Assets/Productos/Alimentos/8.png'),
    imgDorso: require('../../Assets/Productos/Alimentos/8-D.png'),
    stock: true,

  },


































  {
    id: 9,
    name: 'Cucha para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory: 'Cuchas',
    price: 400,
    img:'/animales.jpg',
    stock: false,

  },

  {
    id: 10,
    name: 'Cucha para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory:'Cuchas',
    price: 500,
    img:'/animales.jpg',
    stock: false,

  },

  {
    id: 11,
    name: 'Juguete para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Juguetes',
    price: 600,
    img:'/animales.jpg',
    stock: false,

  },

  {
    id: 12,
    name: 'Juguete para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory:'Juguetes',
    price: 700,
    img:'/animales.jpg',
    stock: false,


  },

  {
    id: 13,
    name: 'Cama para perros',
    category: 'Perros',
    desc:'Acà va un texto de prueba',
    subcategory:'Camas', 
    price: 800,
    img:'/animales.jpg',
    stock: false,

  },

  {
    id: 14,
    name: 'Cama para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory:'Camas',
    price: 900,
    img:'/animales.jpg',
    stock: false,

  },

  {
    id: 15,
    name: 'Rascador para gatos',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Juguetes',
    price: 1000,
    img:'/animales.jpg',
    stock: false,

  },

  {
    id: 16,
    name: 'Rascador para gatos 2',
    category: 'Gatos',
    desc:'Acà va un texto de prueba',
    subcategory: 'Juguetes',
    price: 1100,
    img:'/animales.jpg',
    stock: false,

  },







]




export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});