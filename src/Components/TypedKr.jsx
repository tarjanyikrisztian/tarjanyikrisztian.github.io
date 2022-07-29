import { useState, useEffect } from 'react'

const TypedKr = () => {
    const nameK = "Krisztián";
    const nameT = " Tarjányi";
    const [typed, setTyped] = useState("");
    const [typed2, setTyped2] = useState("");

    useEffect(() => {
        if(nameK.length != typed.length){
        const timeout = setTimeout(() => {
            setTyped(nameK.slice(0, typed.length + 1));
        },
            100);
        return () => {
            clearTimeout(timeout);
        };
    }
    else{
        const timeout = setTimeout(() => {
            setTyped2(nameT.slice(0, typed2.length + 1));
        },
            100);
        return () => {
            clearTimeout(timeout);
        };
    }
    }, [typed, typed2]);

    return (
        <>
            <b><a className="kr">{typed}</a></b>{typed2}
        </>
    );
}
export default TypedKr