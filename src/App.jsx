import { useEffect, useState } from "react";
import ActorCard from "./ActorCard";
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
            <ul className="cardContainer">
                {actorList.map((actor, i) => {
                    return <ActorCard actor={actor}/>;
                })}
            </ul>
        </>
    );
}

export default App;
