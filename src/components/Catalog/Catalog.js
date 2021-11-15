import { useEffect, useState } from 'react';
import CatalogGameCard from './CatalogGameCard';

function Catalog() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
			.then((res) => res.json())
			.then((games) => setGames(games));
	}, []);

	return (
		<section id="catalog-page">
			<h1>All Games</h1>
			{games.length === 0 ? (
				<h3 className="no-articles">No articles yet</h3>
			) : (
				games.map((game) => (
					<CatalogGameCard key={game._id} currentGame={game} />
				))
			)}
		</section>
	);
}

export default Catalog;
