// data.js
import { FaListUl, FaDog, FaCat } from "react-icons/fa";

export const Categories = [
  {
    id: 1,
    name: 'Todos',
    icon: <FaListUl/>,
    category: 'Todos',
    subcategories: 
    [
      {
        id:101,
        name:"Alimentos"
      }, 
      {
        id: 102,
        name:'Accesorios'
      }, 
      {
        id:103,
        name:'Juguetes'
      }, 
        
      {
        id:104,
        name:'Cuchas'
      }, 
      {
        id:105,
        name:'Camas'
      }, 
      {
        id:106,
        name:'Rascadores'
      },
    ],

  },
  {
    id: 2,
    name: 'Perros',
    icon: <FaDog/>,
    category: 'Perros',
    subcategories:     [
      {
        id:201,
        name:"Alimentos"
      }, 
      {
        id: 202,
        name:'Accesorios'
      }, 
      {
        id:203,
        name:'Juguetes'
      }, 
        
      {
        id:204,
        name:'Cuchas'
      }, 
      {
        id:205,
        name:'Camas'
      }, 
    
    ],

 },
  {
    id: 3,
    name: 'Gatos',
    icon: <FaCat/>,
    category: 'Gatos',
    subcategories:     
    [
      {
        id:301,
        name:"Alimentos"
      }, 
      {
        id: 302,
        name:'Accesorios'
      }, 
      {
        id:303,
        name:'Juguetes'
      }, 
        
      {
        id:304,
        name:'Cuchas'
      }, 
      {
        id:305,
        name:'Camas'
      }, 
      {
        id:306,
        name:'Rascadores'
      },
    ],

  },
];
