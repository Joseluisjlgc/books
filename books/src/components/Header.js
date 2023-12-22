import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <header className="header">
            <div className="header__options">
                <Link to={"/"}>
                    <div className="header__pres">
                        <img className="header__logo" src={"logo.jpg"} alt="logo" />
                        <h1 className="header__text">UNIR-BIBLIOTECA</h1>
                    </div>
                </Link>
                <Link to={"/user"}>
                    <img className="header__user" src={"Generic-Profile-Image.png"} alt="profile"/>
                </Link>
            </div>
            <div className="header__tab">
                <Link to={"/books"}>
                    <button className="header__tablinks">Libros</button>
                </Link>
            </div>
        </header>
    );
}