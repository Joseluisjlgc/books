import React from 'react';

function NotFound() {
    return (
        <div className="NF">
            <img className="NF__img" src={'vacio.jpg'} alt="Blank"/>
            <h2 className = "NF__text">404 - La Pagina que estas buscando esta vacia</h2>
        </div>
    );
}

export default NotFound;