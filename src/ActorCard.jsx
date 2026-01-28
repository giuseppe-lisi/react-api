function ActorCard({ actor, key }) {
    return (
        <li key={key}>
            <img src={actor.image} alt={`Foto di ${actor.name}`} />
            <ul>
                <li>Nome: {actor.name}</li>
                <li>Anno di Nascita: {actor.birth_year}</li>
                <li>Nazionalità: {actor.nationality}</li>
                <li>Riconoscimenti: {actor.awards}</li>
                <li>Biografia: {actor.biography}</li>
            </ul>
        </li>
    );
}

export default ActorCard;
