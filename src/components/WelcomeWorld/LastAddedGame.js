import { Link } from 'react-router-dom';

//function LastAddedGame({ gameData, navigationChangeHandler }) {
function LastAddedGame({ gameData }) {
	const gameDetilsLink = `/game-details/${gameData._id}`;

	// function onClickDetailsHandler(e) {
	// 	e.preventDefault();
	// 	navigationChangeHandler(gameDetilsLink);
	// }

	return (
		<div className="game">
			<div className="image-wrap">
				<img alt="" src={gameData.imageUrl} />
			</div>
			<h3>{gameData.title}</h3>
			<div className="rating">
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
			</div>
			<div className="data-buttons">
				<Link to={gameDetilsLink} className="btn details-btn">
					Details
				</Link>

				{/* <a
					onClick={onClickDetailsHandler}
					href={gameDetilsLink}
					className="btn details-btn"
				>
					Details
				</a> */}
			</div>
		</div>
	);
}

export default LastAddedGame;
