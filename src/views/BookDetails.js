import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {BookContext} from '../context/BookContext';

const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(r => r.id === bookId);

    if (!book) {
        return <h2>EL libro no existe</h2>;
    }

    return (
        <div className="book-details">
            <h3>{book.nombre}</h3>
            <h4>{book.autor}</h4>
            <p>{book.publicacion}</p>
            <p>{book.sinopsis}</p>
            <span>Criticas: {book.criticas}</span>
            <span>Disponibles: {book.disponible}</span>
            <span>ISBN: {book.isbn}</span>
        </div>
    );
}

export default BookDetails;