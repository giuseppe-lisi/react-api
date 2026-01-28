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
    
    return (
        <>
            <div>Lista di attori</div>
            <ul></ul>
            <button>Stampa attori</button>
        </>
    );
}

export default App;
