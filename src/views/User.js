import React, {useContext, useEffect,  useState , useMemo} from 'react';
import {UserContext} from "../context/UserContext";
import {Recoger} from "../components/Recoger";


export const User = () => {
    const {user} = useContext(UserContext);
    const esp = user.espera;

    return (
        <div>
            <div className="user-container">
                <p>{user.nombre}</p>
                <p>{user.edad}</p>
            </div>
            {/* <div className='espera-container'>
                {
                    esp.length > 0 ? (
                        esp.map((ord, index) => (
                            <Recoger
                                key={index}
                                id={ord.id}
                                num={ord.num}
                            />
                        ))
                    ):(
                        <span>Espera</span>
                    )
                }
            </div> */}
        </div>
    );
}

export default User;