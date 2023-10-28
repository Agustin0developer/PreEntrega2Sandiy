import './ItemDetail.css';
import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2 className='titulo'>{nombre}</h2>
      <div className='info'>
        <h3 className='subtitulo'>Precio:</h3>
        <p className='precio'>{precio}</p>
      </div>
      <div className='info'>
        <h3 className='subtitulo'>ID:</h3>
        <p className='id'>{id}</p>
      </div>
      <div className='imagen-container'>
        <img src={img} alt={nombre} className='imagen' />
      </div>
      <div className='descripcion-seccion'>
        <p className='descripcion'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime
          magni debitis sapiente! Pariatur illum tempore excepturi asperiores
        </p>

        {agregarCantidad > 0 ? (
          <Link to="/cart">Terminar Compra</Link>
        ) : (
          <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
