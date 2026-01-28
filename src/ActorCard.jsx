function ActorCard({ actor }) {
    return (
        <li key={actor.id} className="card">
            <div>
                <img src={actor.image} alt={`Foto di ${actor.name}`} />
                <h2>Name: {actor.name}</h2>
                <h5>Birthyear: {actor.birth_year}</h5>
                <h5>Nationality: {actor.nationality}</h5>
                <p>Bio: {actor.biography}</p>
                <sub>Awards: {actor.awards}</sub>
            </div>
        </li>
    );
}

export default ActorCard;
