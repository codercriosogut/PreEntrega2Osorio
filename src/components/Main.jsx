import { Routes, Route } from 'react-router-dom';
import Contacto from '../pages/Contacto';
import ItemListContainer from './ItemListContainer';
import Personajes from '../pages/Personajes'
import PersonajeContainer from '../pages/PersonajeContainer'
import Sucursales from '../pages/Sucursales';


function Main() {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer title="Productos" />} />
            <Route path='/Productos' element={<ItemListContainer title="Productos" />} />
            <Route path='/characters' element={<Personajes />} />
            <Route path="/characters/:id" element={<PersonajeContainer />} />
            <Route path="/Sucursales" element={<Sucursales title="Sucursales" />} />
            <Route path='/Contactos' element={<Contacto />} />
        </Routes>
    );
}

export default Main;
