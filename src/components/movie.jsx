import { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
    const [data, setData]= useState("");
    const [movieTitle, setMovieTitle]= useState("");

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("http://www.omdbapi.com/?apikey=99d871f0&t=" + movieTitle);
                console.log("RESPONSE:", res);
                setData(res.data);
            } catch(err){
                console.error("This is an error");
            }
        }

        getMovie();
}, [movieTitle]);

    return (
        <>
        <div>
            <h2>Movie</h2>
            <p>Film Name</p>
            <input type="text" value={movieTitle} onChange={e=>setMovieTitle(e.target.value)}/>
            

            <h4>{data.Title}</h4>
            <h4>{data.Year}</h4>
            <h4>{data.Rated}</h4>
            <h4>{data.Genre}</h4>
            <h4>{data.Plot}</h4>
            <img src={data.Poster} alt="The Poster"></img>
        </div>
        </>
    );
    }

export default Movie;