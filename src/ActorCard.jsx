function ActorCard({ actor }) {
    return (
        <li key={actor.id}>
            <div>
                <img src={actor.image} alt={`Foto di ${actor.name}`} />
                <h2>Nome: {actor.name}</h2>
                <h5>Anno di Nascita: {actor.birth_year}</h5>
                <h5>Nazionalità: {actor.nationality}</h5>
                <p>Biografia: {actor.biography}</p>
                <sub>Riconoscimenti: {actor.awards}</sub>
            </div>
        </li>
    );
}

export default ActorCard;
