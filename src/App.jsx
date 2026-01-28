import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const apiUrl = "https://lanciweb.github.io/demo/api/actresses/";
    const [actorList, setActorList] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            setActorList(res.data);
        });
    }, []);

    console.log(actorList);
    

    return (
        <>
            <div>Lista di attori</div>
            <ul>
                {actorList.map((actor, i) => {
                    return (
                        <li key={i}>
                            <ul>
                                <img src={actor.image} />
                                <li>{actor.name}</li>
                                <li>{actor.birth_year}</li>
                                <li>{actor.nationality}</li>
                                <li>{actor.biography}</li>
                                <li>{actor.awards}</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
            <button>Stampa attori</button>
        </>
    );
}

export default App;
