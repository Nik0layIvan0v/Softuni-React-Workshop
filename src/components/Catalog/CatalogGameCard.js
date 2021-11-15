function CatalogGameCard({ currentGame }) {
	const gameDetilsLink = `/data/games/${currentGame._id}`;

	return (
		<div className="allGames">
			<div className="allGames-info">
				<img alt="" src={currentGame.imageUrl} />
				<h6>{currentGame.category}</h6>
				<h2>{currentGame.title}</h2>
				<a href={gameDetilsLink} className="details-button">
					Details
				</a>
			</div>
		</div>
	);
}

export default CatalogGameCard;
