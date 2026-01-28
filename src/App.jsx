import { useState } from "react";
import axios from "axios";

function App() {
    const apiUrl = "https://lanciweb.github.io/demo/api/actresses/";

    const printActors = () => {
        axios.get(apiUrl).then((res) => console.log(res.data));
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
