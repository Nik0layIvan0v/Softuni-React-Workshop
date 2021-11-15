import { useState } from 'react';
import Catalog from './components/Catalog/Catalog';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import WelcomeWorld from './components/WelcomeWorld/WelcomeWorld';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
	const [page, setPage] = useState('/home');

	const navigationChangeHandler = (path) => {
		setPage(path);
	};

	const router = (page) => {
		const routeArguments = page.split('/');
		const routePath = routeArguments[1];
		const gameId = routeArguments[2];

		const routes = {
			home: <WelcomeWorld />,
			'all-games': (
				<Catalog
					navigationChangeHandler={navigationChangeHandler}
				/>
			),
			'create-game': <Create />,
			login: <Login />,
			register: <Register />,
			'edit-game': <Edit id={gameId} />,
			'game-details': <Details />,
			Error404: <ErrorPage />,
		};

		return routes[routePath];
	};

	return (
		<div id="box">
			<Header navigationChangeHandler={navigationChangeHandler} />
			<main id="main-content">
				{router(page) || router('/Error404')}
			</main>
		</div>
	);
}

export default App;
