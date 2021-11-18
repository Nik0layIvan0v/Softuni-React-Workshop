import { Link } from 'react-router-dom';

//function Header({ navigationChangeHandler })
function Header() {
	// const onHeaderClick = (e) => {
	// 	e.preventDefault();
	// 	if (e.target.tagName === 'A') {
	// 		let url = new URL(e.target.href);
	// 		navigationChangeHandler(url.pathname);
	// 	}
	// };

	return (
		//<header onClick={onHeaderClick}>
		<header>
			<h1>
				<Link to="/">GamesPlay</Link>
				{/* <a className="home" href="/home">
					GamesPlay
				</a> */}
			</h1>
			<nav>
				<Link to="/all-games">All games</Link>
				{/* <a href="/all-games">All games</a> */}
				<div id="user">
					<Link to="/create-game">Create Game</Link>
					{/* <a href="/create-game">Create Game</a> */}
					<Link to="/logout">Logout</Link>
					{/* <a href="/logout">Logout</a> */}
				</div>
				<div id="guest">
					<Link to="/login">Login</Link>
					{/* <a href="/login">Login</a> */}
					<Link to="/register">Register</Link>
					{/* <a href="/register">Register</a> */}
				</div>
			</nav>
		</header>
	);
}

export default Header;
