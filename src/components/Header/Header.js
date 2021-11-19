import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

//function Header({ navigationChangeHandler })
function Header() {
	// const onHeaderClick = (e) => {
	// 	e.preventDefault();
	// 	if (e.target.tagName === 'A') {
	// 		let url = new URL(e.target.href);
	// 		navigationChangeHandler(url.pathname);
	// 	}
	// };

	let activeLinkStyles = {
		backgroundColor: 'blue',
		color: 'white',
	};

	return (
		//<header onClick={onHeaderClick}>
		<header>
			<h1>
				<NavLink
					activeClassName={styles['active-title-link']}
					to="/"
				>
					GamesPlay
				</NavLink>
				{/* <a className="home" href="/home">
					GamesPlay
				</a> */}
			</h1>
			<nav>
				<NavLink activeStyle={activeLinkStyles} to="/all-games">
					All games
				</NavLink>
				{/* <a href="/all-games">All games</a> */}
				<div id="user">
					<NavLink
						activeStyle={activeLinkStyles}
						to="/create-game"
					>
						Create Game
					</NavLink>
					{/* <a href="/create-game">Create Game</a> */}
					<NavLink to="/logout">Logout</NavLink>
					{/* <a href="/logout">Logout</a> */}
				</div>
				<div id="guest">
					<NavLink activeStyle={activeLinkStyles} to="/login">
						Login
					</NavLink>
					{/* <a href="/login">Login</a> */}
					<NavLink activeStyle={activeLinkStyles} to="/register">
						Register
					</NavLink>
					{/* <a href="/register">Register</a> */}
				</div>
			</nav>
		</header>
	);
}

export default Header;
