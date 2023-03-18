import agua from "../img/agua.png";
import aceite from "../img/aceite.jpg";
import yerba from "../img/yerba.jpg";
import choclo from "../img/choclo.png";


 const Products = [
  {
    id: 1,
    name: "Agua",
    marca: "Eco de los Andes",
    precio: 115.0,
    image: agua,
  },

  { id: 2,
     name: "Aceite",
     marca: "Natura",
      precio: 500.0,
       image: aceite, 
      },

  { id: 3, name: "Yerba",
   marca: "Playadito",
    precio: 650.0,
     image: yerba,
     },
  { id: 4,
     name: "Conservas",
      marca: "Mcain",
       precio: 110.0,
        image: choclo,
        },
];

export default Products;