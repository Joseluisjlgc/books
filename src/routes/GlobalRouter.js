import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from '../views/BookDetails';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Estante} from "../views/Estante";
import User from "../views/User";
import {Header} from "../components/Header";
import '../styles/header.css';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Overview /></Layout>} />
                <Route path="/books" element={<Layout><Estante /></Layout>} />
                <Route path="/books/:bookId" element={<Layout><BookDetails /></Layout>} />
                <Route path="/user/" element={<Layout><User /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;

// <Route path="/restaurants/:restaurantId" element={<Layout><RestaurantDetails /></Layout>} />
// <Route path="*" element={<Layout><NotFound /></Layout>} />