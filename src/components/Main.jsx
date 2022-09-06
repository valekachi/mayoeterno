import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import estilos from './item.module.css';

const Main = () => {
return (
    <main className={estilos.card}>
        <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer/>}
                />
                <Route
                    path="/category/:categoryName"
                    element={<ItemListContainer />}
                />
                <Route
                    path="/detail/:idProd"
                    element={<ItemDetailContainer />}
                />
            </Routes>
        </main>
)
}

export default Main;