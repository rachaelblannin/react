import axios from "axios";
import { useEffect, useState } from "react";

const [film, setFilm = useState();
const [title, setTitle] = useState();

useEffect(() => {
    console.log("Loaded");
    const getFilm = async () => {
        try {
            const res =  await axios.get("http://www.omdbapi.com/?apikey=[99d871f0]" + name);
            console.log("RESPONSE:", res);
            setTitle(res.data);
        } catch(err) {
        }
    }

    getFilm();
}, [name]);

if (film) {
    return ( 
        <>
            <label htmlFor="film">Name:</label>
            <input type="text" id="film" value={name} onChange={e => setName(e.target.value)} />
            <h2>{poke.name}</h2>
            <section>
                <p>Title: {data}.title}</p>
                <p>Year: {data.year}</p>
                <p>Plot: {data.Plot}</p>
            </section>
        </>
    );
} else {
    return <p>Loading...</p>
}
}

export default Poke;
