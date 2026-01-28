function ActorCard({ actor }) {
    return (
        <li key={actor.id} className="card">
            <div>
                <div className="cardImage">
                    <img src={actor.image} alt={`Foto di ${actor.name}`} />
                </div>
                <div className="cardContent">
                    <h2>{actor.name}</h2>
                    <h5>{actor.birth_year}</h5>
                    <h6>{actor.nationality}</h6>
                    <p>{actor.biography}</p>
                    <sub>Awards: {actor.awards}</sub>
                </div>
            </div>
        </li>
    );
}

export default ActorCard;
