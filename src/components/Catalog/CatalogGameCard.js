import { Link } from 'react-router-dom';
import React from 'react';
//function CatalogGameCard({ currentGame, navigationChangeHandler }) {
function CatalogGameCard({ currentGame }) {
	const gameDetilsLink = `/game-details/${currentGame._id}`;

	// function detailsButtonClickHandler(e) {
	// 	e.preventDefault();
	// 	navigationChangeHandler(gameDetilsLink);
	// }
	return (
		<div className="allGames">
			<div className="allGames-info">
				<img alt="" src={currentGame.imageUrl} />
				<h6>{currentGame.category}</h6>
				<h2>{currentGame.title}</h2>
				<Link to={gameDetilsLink} className="details-button">
					Details
				</Link>

				{/* <a
					href={gameDetilsLink}
					onClick={detailsButtonClickHandler}
					className="details-button"
				>
					Details
				</a> */}
			</div>
		</div>
	);
}

export default CatalogGameCard;
