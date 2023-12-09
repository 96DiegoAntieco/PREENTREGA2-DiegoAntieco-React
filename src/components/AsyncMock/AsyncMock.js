import imgBlanco from "../img/ImgAutoBlanco.jpeg";
import imgGris from "../img/ImgAutoGris.jpeg";
import imgNegro from "../img/ImgAutoNegro.jpeg";
import imgRojo from "../img/ImgAutoRojo.jpg";
import imgCamionetaGris from "../img/imgCamionetaGris.jpg";
import imgCamionetaBlanca from "../img/imgCamionetaBlanca.jpg";
const productos = [
  {
    id: "1",
    nombre: "Alfa Romeo Stelvio Ti 2021",
    precio: 55000,
    categoria: "autos",
    img: imgBlanco,
    stock: 2,
    descripcion:
      "Stelvio está equipado con sistemas que supervisan de forma inteligente el entorno del vehículo para garantizar el control y un placer de conducción excepcional.",
  },
  {
    id: "2",
    nombre: "Alfa Romeo Stelvio 2020",
    precio: 50000,
    categoria: "autos",
    img: imgGris,
    stock: 1,
    descripcion:
      "Con tracción trasera de serie, el Stelvio puede tener como opción un sistema de tracción total Alfa Romeo Q4, que puede enviar hasta el 50% de la potencia al frente en condiciones de baja adherencia.",
  },
  {
    id: "3",
    nombre: "Alfa Romeo Mexico 2019",
    precio: 49000,
    categoria: "autos",
    img: imgNegro,
    stock: 4,
    descripcion:
      "Todos los modelos cuentan con un sistema de infoentretenimiento de 8,8 pulgadas con Apple Car Play y Android Auto de serie, aunque se han realizado pequeños ajustes en todas las gamas..",
  },
  {
    id: "4",
    nombre: "Alfa Romeo Stelvio Quadrifoglio 2022",
    precio: 70000,
    categoria: "autos",
    img: imgRojo,
    stock: 6,
    descripcion:
      "El sistema que Alfa utiliza tiene una perilla giratoria para controlar la pantalla montada en el tablero de instrumentos que no es táctil. El sistema es notablemente fácil de entender y operar, a diferencia de algunos competidores de estilo similar. Apple CarPlay y Android Auto aparecen por primera vez este año.",
  },
  {
    id: "5",
    nombre: "Hummer H2 2017",
    precio: 90000,
    categoria: "camionetas",
    img: imgCamionetaGris,
    stock: 2,
    descripcion:
      "Hummer es una marca de vehículos todoterreno perteneciente al grupo General Motors.​ El primer modelo es un derivado del Humvee, un vehículo de uso militar",
  },
  {
    id: "6",
    nombre: "Humer H3 2020",
    precio: 110000,
    categoria: "camionetas",
    img: imgCamionetaBlanca,
    stock: 4,
    descripcion:
      "El HMMV era originalmente fabricado por AM General Corporation, la anterior división de motores para el gobierno y las fuerzas armadas estadounidenses. ",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductosById = (ProductosId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === ProductosId));
    }, 1000);
  });
};

export const getProductosByCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoriaId));
    }, 1000);
  });
};
