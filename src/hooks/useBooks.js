import {useEffect, useState} from "react";

export const useBooks = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        
        setTimeout(() => {
            setBooks([
                { id: "1", nombre: "Hello1", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "1", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "2",nombre: "Tech", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "2", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "3", nombre: "Hello2", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "3", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "4",nombre: "Vaca", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "4", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "5", nombre: "16 Accords of Madness, v. IX", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "5", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "6",nombre: "16 Accords of Madness, v. VI", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "6", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "7", nombre: "16 Accords of Madness, v. XII", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "7", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "8",nombre: "2920 vol 01 - Morning Star", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "8", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "9", nombre: "2920 vol 02 - Sun's Dawn", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "9", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "10",nombre: "2920, vol 03 - First Seed", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "10", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "11", nombre: "2920, vol 04 - Rain's Hand", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "11", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "12",nombre: "2920, vol 05 - Second Seed", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "12", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "13", nombre: "2920, vol 06 - Mid Year", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "13", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "14",nombre: "2920, vol 07 - Sun's Height", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "14", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "15", nombre: "2920, vol 08 - Last Seed", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "15", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "16",nombre: "2920, vol 09 - Hearth Fire", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "16", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "17", nombre: "2920, vol 10 - Frostfall", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "17", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "18",nombre: "2920, vol 11 - Sun's Dusk", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "18", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "19", nombre: "2920, vol 12 - Evening Star", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "19", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "20",nombre: "A Children's Anuad", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "20", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "21", nombre: "A Dance in Fire, Book I", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "21", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "22",nombre: "A Dance in Fire, Book II", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "22", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "23", nombre: "A Dance in Fire, Book III", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "23", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "24",nombre: "A Dance in Fire, Book IV", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "24", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "25", nombre: "A Dance in Fire, Book V", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "25", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "26",nombre: "A Dance in Fire, Book VI", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "26", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "27", nombre: "A Dance in Fire, Book VII", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "27", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "28",nombre: "A Dream of Sovngarde", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "28", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "29", nombre: "A Game at Dinner", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "29", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "30",nombre: "A Gentleman's Guide to Whiterun", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "30", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "31", nombre: "A Hypothetical Treachery", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "31", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "32",nombre: "A Kiss, Sweet Mother", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "32", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "33", nombre: "A Minor Maze", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "33", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "34",nombre: "A Tragedy in Black", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "34", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "35", nombre: "Adonato's Book", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "35", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "36",nombre: "Advances in Lockpicking", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "36", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "37", nombre: "Aedra and Daedra", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "37", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "38",nombre: "Aevar Stone-Singer", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "38", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "39", nombre: "Ahzidal's Descent", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "39", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "40",nombre: "Ahzirr Traajijazeri", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "40", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "41", nombre: "Alduin is Real", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "41", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "42",nombre: "Amongst the Draugr", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "42", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "43", nombre: "An Accounting of the Scrolls", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "43", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "44",nombre: "An Explorer's Guide to Skyrim", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "44", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "45", nombre: "Ancestors and the Dunmer", autor: "Jacob", publicacion: "01/01/2000", isbn: "0000000000", portada: "45", 
                sinopsis: "-", criticas: "Neutral", disponible: "10"},
                { id: "46",nombre: "Annals of the Dragonguard", autor: "Daniel", publicacion: "02/01/2000", isbn: "0000000001", portada: "46", 
                sinopsis: "-", criticas: "Mayormente Positivas", disponible: "0"},
                { id: "47", nombre: "Antecedents of Dwemer Law", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "47", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "48",nombre: "Arcana Restored", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "48", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"},

                { id: "49", nombre: "Atlas of Dragons", autor: "Jacob", publicacion: "01/01/2002", isbn: "0000000002", portada: "49", 
                sinopsis: "-", criticas: "Neutral", disponible: "5"},
                { id: "50",nombre: "Azura and the Box", autor: "Henry", publicacion: "02/06/2000", isbn: "0000000003", portada: "50", 
                sinopsis: "-", criticas: "Negativas", disponible: "7"}
            ]);
        }, 1500);
    }, []);

    return books;
}