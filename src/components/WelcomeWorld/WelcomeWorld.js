import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService.js';
import LastAddedGame from './LastAddedGame.js';
//function WelcomeWorld({ navigationChangeHandler })
function WelcomeWorld() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		gameService.getLastestGames().then((result) => setGames(result));
	}, []);

	return (
		<section id="welcome-world">
			<div className="welcome-message">
				<h2>ALL new games are</h2>
				<h3>Only in GamesPlay</h3>
			</div>
			<img src="./images/four_slider_img01.png" alt="hero" />
			<div id="home-page">
				<h1>Latest Games</h1>
				{games.length === 0 ? (
					<p className="no-articles">No games yet</p>
				) : (
					games.map((game) => (
						<LastAddedGame key={game._id} gameData={game} />
					))

					// games.map((game) => (
					// 	<LastAddedGame
					// 		key={game._id}
					// 		gameData={game}
					// 		navigationChangeHandler={
					// 			navigationChangeHandler
					// 		}
					// 	/>
					// ))
				)}
			</div>
		</section>
	);
}

export default WelcomeWorld;
