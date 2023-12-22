import React, {useContext,useEffect, useState, useMemo} from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../context/UserContext";

export const Book = ({ id, nombre, autor, publicacion, portada, criticas, disponible}) => {
    
    const {user} = useContext(UserContext);
    const [r, setR] = useState(user.pedidos);
    var query = 0;
    var updatedList = r;
    let check = {};
    let pIndex = null;
    console.log(check);

    useMemo(()=>{
        check = updatedList.find((current) => current.id === id);
        pIndex = updatedList.indexOf(check);
        if(check) {
            query = updatedList[pIndex].num;
            console.log(query);
        } else query = 0;
    }, [])

    useEffect(() => {
        check = updatedList.find((current) => current.id === id);
        pIndex = updatedList.indexOf(check);
        if(check) {
            query = updatedList[pIndex].num;
            console.log(query);
        } else query = 0;
    }, []);
    
    const addBook = (event) => {
        query = event.target.value;
        updatedList = r;

        if(updatedList.length > 0){
            check = updatedList.find((current) => current.id === id);
            if(check){
                pIndex = updatedList.indexOf(check);
                if (query == 0){
                    updatedList.splice(pIndex, 1);
                } else {updatedList[pIndex].num = query}
            }else {console.log("hello");
                if(query > 0){
                    updatedList.push({id: id, num: query})
                }
            }
        }else {console.log("hello");
            if(query > 0){
                updatedList.push({id: id, num: query})
            }
        }
        setR(updatedList);
        console.log(r);
    }

    return (
        <div className="card">
            <img className="card__portada" src={`../portada/${portada}.jpg`} alt= "portada" />
            <div className="card__libroInf">
                <h3>{nombre}</h3>
                <h4>{autor} - {publicacion}</h4>
                <p>Criticas: {criticas}</p>
                <div id="card__input">
                    <label htmlFor={`disp${id}`}>Reservar:</label>
                    {
                        disponible > 0 ? (
                            query === 0 ? (
                                <input type="number" id={`numero${id}`} name={`disp${id}`} min="0" max= {disponible} onChange={addBook} />
                            ) : (
                                <div>
                                <span>hellos</span>
                                <input type="number" id={`numero${id}`} name={`disp${id}`} min="0" max= {disponible} onChange={addBook} placeholder={query} />
                                </div>
                            )
                        ) : (
                            <span name={`disp${id}`}>X</span>
                        )
                    }
                    <Link to={`/books/${id}`}>
                        <button className="detalles">Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}