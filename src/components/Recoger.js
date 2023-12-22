import React, {useContext,useEffect, useState, useMemo} from "react";

export const Recoger = (id, num) => {
    
    return (
        <div className="pedido">
            {
                <div>
                    <h4>ID Libro:{id}</h4>
                    <h4>Copias: {num}</h4>
                </div>
                
            }
        </div>
    );
}