import { useEffect, useState } from 'react';
import CatalogGameCard from './CatalogGameCard';

function Catalog() {
	const [games, setGames] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			fetch(
				'http://localhost:3030/data/games?sortBy=_createdOn%20desc'
			)
				.then((res) => res.json())
				.then((games) => {
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
			<CatalogGameCard key={game._id} currentGame={game} />
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
