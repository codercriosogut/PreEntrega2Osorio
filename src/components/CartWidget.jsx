import React, { useState } from 'react';
import { Button } from "antd";
import { ShoppingBag } from 'lucide-react';

function CartWidget(props) {
    const [detalleProducto, setDetalleProducto] = useState(null);
    const [counter, setCounter] = useState(0);

    const handleClickDetalle = () => {
        setDetalleProducto(props);
    };

    const handleClickAgregar = () => {
        const nuevoValor = counter + 1;
        setCounter(nuevoValor);
    };

    if (detalleProducto) {
        return (
            <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Detalle del producto {detalleProducto.name}</h3>
                <p>{detalleProducto.description}</p>
                <p>Precio: $ {detalleProducto.price}</p>
                <Button type="primary" onClick={() => setDetalleProducto(null)}>Volver</Button>
            </div>
        );
    }

    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105">
            <img className="w-full rounded-md mb-2" src="https://picsum.photos/400" alt="card image" />
            <h2 className="my-2 font-bold">{props.name}</h2>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <button className="mr-2" onClick={handleClickAgregar}>
                        Agregar
                        <span className="ml-1">{counter}</span>
                        <ShoppingBag size={24} />
                    </button>
                </div>
                <div>
                    <Button type="primary" onClick={handleClickDetalle}>Ver más</Button>
                </div>
            </div>
        </div>
    );
}

export default CartWidget;
