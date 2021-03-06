import { useEffect, useState, lazy, Suspense } from 'react';
// import CatalogGameCard from './CatalogGameCard';
import * as gameService from '../../services/gameService';

//function Catalog({ navigationChangeHandler }) {
function Catalog() {
	const GameCard = lazy(() => import('./CatalogGameCard'));

	const [games, setGames] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			gameService.getAll().then((games) => {
				setGames(games);
				setIsLoading(false);
			});
		}, 1000);
	}, []);

	function getAllGames() {
		if (games.length === 0) {
			return <h3 className="no-articles">No articles yet</h3>;
		}
		return games.map((game) => (
			<Suspense fallback={<p>Loading...</p>}>
				<GameCard key={game._id} currentGame={game} id={game._id} />
			</Suspense>

			// <CatalogGameCard
			// 	key={game._id}
			// 	currentGame={game}
			// 	id={game._id}
			// 	navigationChangeHandler={navigationChangeHandler}
			// />
		));
	}

	return (
		<section id="catalog-page">
			<h1>All Games</h1>
			{isLoading === true ? <h1>loading...</h1> : getAllGames()}
		</section>
	);
}

export default Catalog;
