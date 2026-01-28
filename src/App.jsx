import { useEffect, useState } from "react";
import ActorCard from "./ActorCard";
import axios from "axios";

function App() {
    const apiUrlWomen = "https://lanciweb.github.io/demo/api/actresses/";
    const apiUrlMen = "https://lanciweb.github.io/demo/api/actors/";

    const [actorList, setActorList] = useState([]);

    useEffect(() => {
        const women = axios.get(apiUrlWomen);
        const men = axios.get(apiUrlMen);

        Promise.all([women, men])
            .then(([resWomen, resMen]) => {
                const fixedResMen = resMen.data.map((actor) => {
                    return { ...actor, id: `${actor.id + 100}` };
                });
                setActorList([...resWomen.data, ...fixedResMen]);
            })
            .catch((err) => console.log(`Incontrato un errore: ${err}`));
    }, []);

    return (
        <>
            <div>Lista di attori</div>
            <ul className="cardContainer">
                {actorList.map((actor) => {
                    return <ActorCard actor={actor} key={actor.id} />;
                })}
            </ul>
        </>
    );
}

export default App;
