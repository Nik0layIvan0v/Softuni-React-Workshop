import * as cardService from '../../services/gameService.js';
import { useEffect, useState } from 'react';

function Details({ id }) {
	const [game, setGame] = useState({});

	useEffect(() => {
		cardService.getById(id).then((data) => setGame(data));
	}, [id]);

	return (
		<section id="game-details">
			<h1>Game Details</h1>
			<div className="info-section">
				<div className="game-header">
					<img alt="" className="game-img" src={game.imageUrl} />
					<h1>{game.title}</h1>
					<span className="levels">
						MaxLevel: {game.maxLevel}
					</span>
					<p className="type">{game.category}</p>
				</div>
				<p className="text">{game.summary}</p>
				<div className="details-comments">
					<h2>Comments:</h2>
					<ul>
						<li className="comment">
							<p>Content: I rate this one quite highly.</p>
						</li>
						<li className="comment">
							<p>Content: The best game.</p>
						</li>
					</ul>
					<p className="no-comment">No comments.</p>
				</div>
				<div className="buttons">
					<a href="index.html" className="button">
						Edit
					</a>
					<a href="index.html" className="button">
						Delete
					</a>
				</div>
			</div>
			<article className="create-comment">
				<label>Add new comment:</label>
				<form className="form">
					<textarea name="comment" placeholder="Comment......" />
					<input className="btn submit" type="submit" />
				</form>
			</article>
		</section>
	);
}

export default Details;
