import { useEffect, useState } from "react";
import ActorCard from "./ActorCard";
import axios from "axios";

function App() {
    const apiUrlWomen = "https://lanciweb.github.io/demo/api/actresses/";
    const apiUrlMen = "https://lanciweb.github.io/demo/api/actors/";

    const [womenActorList, setWomenActorList] = useState([]);
    const [menActorList, setMenActorList] = useState([]);

    useEffect(() => {
        axios.get(apiUrlWomen).then((res) => {
            setWomenActorList(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get(apiUrlMen).then((res) => {
            setMenActorList(res.data);
        });
    }, []);

    return (
        <>
            <div>Lista di attori</div>
            <ul className="cardContainer">
                {womenActorList.map((actor, i) => {
                    return <ActorCard actor={actor} />;
                })}
                {menActorList.map((actor, i) => {
                    return <ActorCard actor={actor} />;
                })}
            </ul>
        </>
    );
}

export default App;
