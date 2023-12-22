import {useEffect, useState} from "react";

export const useUser = () => {

    const [user, setUser] = useState([]);
    
    useEffect(() => {
        
        setTimeout(() => {
            setUser(
                { nombre: "Jose Luis", edad: "28", espera: [], pedidos: []}
            );
        }, 1000);
    }, []);

    return user;
}