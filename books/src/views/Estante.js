import React, {useContext, useEffect, useState } from 'react';
import '../styles/styles.css';
import '../styles/book.css';
import {Book} from "../components/Book";
import {BookContext} from "../context/BookContext";
import {LinearProgress} from "@mui/material";
import {UserContext} from "../context/UserContext";
import {useNavigate} from "react-router";

export const Estante = () => {
    const navigate = useNavigate();
    const [clicks, setClicks] = useState();
    const {user} = useContext(UserContext);
    const [p, setP] = useState(user.pedidos);
    const [e, setE] = useState(user.espera);
    const [message, setMessage] = useState('');
    const {books} = useContext(BookContext);
    const [b] = useState(books);
    let filtro = [];
    const [filterList, setfilterList] = new useState(filtro);
    
    useEffect(() => {
        if(clicks == 1) {
            if(p === undefined || p.length == 0){
                alert(`No hay pedido`);
            } else {
                let rest;
                p.map((i, index) => {
                    if (index == 0) {
                        rest = b.find((current) => current.id === i.id);
                        rest.disponible -= i.num;
                        e.push([{id: i.id, num: i.num}])
                    } else {
                        rest = b.find((current) => current.id === i.id);
                        rest.disponible -= i.num;
                        e[e.length - 1].push({id: i.id, num: i.num})
                    }
                }  );
                p.splice(0, p.length);
                navigate("/user/");
            }
            setClicks(0);
        }
      }, [clicks]);

    useEffect(() => {
        var updatedBooks = [];

        let find = new RegExp(message, "i");
        if(!(message === "")) {
            books.map((book) => {
                if(find.test(book.autor) || find.test(book.nombre) || find.test(book.publicacion) || find.test(book.isbn) || find.test(book.sinopsis)) {
                    updatedBooks.push(book);
                }
            });
        } else updatedBooks = books;

        setfilterList(updatedBooks);
    }, [message, filtro]);

    return (
        <div>
            <h2 className="center-text">Libros</h2>
            <div className='opciones'>
                &#x1F50E;
                <input onInput={(e) => setMessage(e.target.value)}></input>
                <button onClick={() => setClicks(1)} className='opciones__reservar' type='submit'>Reservar</button>
            </div>
            <div className="book-container">
                {
                    filterList.length > 0 ? (
                        filterList.map((book, index) => (
                            <Book
                                key={index}
                                id={book.id}
                                nombre={book.nombre}
                                autor={book.autor}
                                publicacion={book.publicacion}
                                portada={book.portada}
                                criticas={book.criticas}
                                disponible={book.disponible}                
                            />
                        ))
                    ) : (
                        <div className='book-container__loading'>
                            <span className='book-container__loading-text'>Buscando...</span>
                            <LinearProgress color="secondary"/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}