import React, { useState } from 'react';
import CartWidget from '../components/CartWidget';
import { Button } from "antd";
import { ShoppingBag } from 'lucide-react';

function ItemListContainer(props) {
    const [detalleProducto, setDetalleProducto] = useState(null);
    const [counter, setCounter] = useState(0);

    const handleClickDetalle = (producto) => {
        setDetalleProducto(producto);
    };

    const handleClickAgregar = () => {
        const nuevoValor = counter + 1;
        setCounter(nuevoValor);
    };

    const handleVolver = () => {
        setDetalleProducto(null);
    };

    return (
        <main className='p-4 grow mi-main'>
            <h2 className='mb-4 text-2xl font-bold'>{props.title}</h2>
            {detalleProducto ? (
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">Detalle de {detalleProducto.name}</h3>
                    <img src={detalleProducto.image} alt={detalleProducto.name} className="mx-auto" />
                    <p>{detalleProducto.description}</p>
                    <p>Precio: {detalleProducto.price}</p>
                    <Button type="primary" onClick={handleVolver}>Volver</Button>
                </div>
            ) : (
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 users">
                    <div className="flex justify-center max-w-sm"> {/* Agrega la clase "flex justify-center" y "max-w-sm" para centrar las cartas y limitar su ancho */}
                        <CartWidget name="Pan/Artesanal" onVerDetalle={handleClickDetalle} onAgregar={handleClickAgregar} counter={counter} />
                    </div>
                    <div className="flex justify-center max-w-sm"> {/* Agrega la clase "flex justify-center" y "max-w-sm" para centrar las cartas y limitar su ancho */}
                        <CartWidget name="Pan/Corriente" onVerDetalle={handleClickDetalle} onAgregar={handleClickAgregar} counter={counter} />
                    </div>
                    <div className="flex justify-center max-w-sm"> {/* Agrega la clase "flex justify-center" y "max-w-sm" para centrar las cartas y limitar su ancho */}
                        <CartWidget name="Pan/Masamadre" onVerDetalle={handleClickDetalle} onAgregar={handleClickAgregar} counter={counter} />
                    </div>
                </section>
            )}
        </main>
    );
}

export default ItemListContainer;
