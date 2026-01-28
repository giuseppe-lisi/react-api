import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const apiUrl = "https://lanciweb.github.io/demo/api/actresses/";
    const [actorList, setActorList] = useState([]);

    useEffect(() => {
        console.log(actorList);
    }, [actorList])

    const printActors = () => {
        axios.get(apiUrl).then((res) => {
            setActorList(res.data)
        });
    };

    return (
        <>
            <div>Lista di attori</div>
            <ul></ul>
            <button onClick={printActors}>Stampa attori</button>
        </>
    );
}

export default App;
