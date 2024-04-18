import React, { useEffect, useState } from 'react';
function Sucursales() {
  const [cargando, setCargando] = useState(true);
  const [detalleSucursal, setDetalleSucursal] = useState(null);
  useEffect(() => {
    const delay = 5000;
    const timeout = setTimeout(() => {
      setCargando(false);
    }, delay);
    return () => clearTimeout(timeout);
  }, []);
  const handleClickDetalle = (sucursal) => {
    setDetalleSucursal(sucursal);
  };
  if (cargando) {
    return (
      <div className="text-center mt-5">
        <p className="text-primary mb-2">Cargando...</p>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }
  const sucursales = [
    { id: 1, nombre: "Sucursal Norte - Iquique", imagen: "https://source.unsplash.com/random/300x300/?store?1", contenido: "Nacimos el 2016 en Iquique por la inquietud de poder hacer comida deliciosa pero sana a la vez y desde entonces estamos enseñando a nuestros clientes sobre masa madre y fermentación natural que es lo que usamos para hacer nuestros panes" },
    { id: 2, nombre: "Sucursal Centro Santiago", imagen: "https://source.unsplash.com/random/300x300/?store?2", contenido: "La herencia de nuestra compañía es su larga tradición panadera, iniciada en el año 1933, en Santiago. Desde siempre ha existido un fuerte compromiso con la calidad de nuestros productos, consistencia que ha permitido a la marca gozar de gran prestigio en el mercado." },
    { id: 3, nombre: "Surcursal Sur Temuco", imagen: "https://source.unsplash.com/random/300x300/?store?3", contenido: "Nuestra historia parte bajo el alero de Cramer, empresa dedicada a la elaboración de Pan Artesanal, en la comuna de Temuco. Fue aquí donde en 1958 elaboramos nuestro primer producto: Pan Masa Madre." }
  ];
  return (
    <div>
      {detalleSucursal ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary">Detalle de la {detalleSucursal.nombre}</h3>
          <img src={detalleSucursal.imagen} alt={detalleSucursal.nombre} className="mx-auto" />
          <p>{detalleSucursal.contenido}</p>
          <button onClick={() => setDetalleSucursal(null)} className="btn btn-primary">Volver</button>
        </div>
      ) : (
        <div>
          <p className='mb-4 text-2xl font-bold'>-SUCURSALES-</p>
          <div className="row">
            {sucursales.map((sucursal) => (
              <div key={sucursal.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={sucursal.imagen} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title text-primary">{sucursal.nombre}</h3>
                    <p className="card-text">{sucursal.contenido}</p>
                    <button onClick={() => handleClickDetalle(sucursal)} className="btn btn-primary">Ver detalle</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sucursales;
