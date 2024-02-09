// data.js
import { FaListUl, FaDog, FaCat } from "react-icons/fa";

export const Categories = [
  {
    id: 1,
    name: 'Todos',
    icon: <FaListUl/>,
    category: 'Todos',
    subcategories: ['Alimentos', 'Accesorios', 'Juguetes', 'Cuchas', 'Camas', 'Rascadores'],

  },
  {
    id: 2,
    name: 'Perros',
    icon: <FaDog/>,
    category: 'Perros',
    subcategories: ['Alimentos', 'Accesorios', 'Juguetes', 'Cuchas'],

 },
  {
    id: 3,
    name: 'Gatos',
    icon: <FaCat/>,
    category: 'Gatos',
    subcategories: ['Alimentos', 'Accesorios', 'Juguetes', 'Camas', 'Rascadores'],

  },
];
