import { Link, useHistory, Redirect } from 'react-router-dom';

function Login({ history }) {
	let historyHook = useHistory();

	const onFormSubmit = (e) => {
		e.preventDefault();
		//TODO: Login
		//history.push('/all-games'); // 1st way to redirect (direct inheritance of Route component)
		historyHook.push('/all-games'); // 2nd way to redirect (NOT direct inheritance of Route component)
		// 3rd way to redirect is when using <Redirect to=""/> inside jsx syntax example at App() component.
	};

	return (
		<section id="login-page" className="auth">
			<form id="login" onSubmit={onFormSubmit}>
				<div className="container">
					<div className="brand-logo" />
					<h1>Login</h1>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Sokka@gmail.com"
					/>
					<label htmlFor="login-pass">Password:</label>
					<input
						type="password"
						id="login-password"
						name="password"
					/>
					<input type="submit" className="btn submit" />
					<p className="field">
						<span>
							If you don't have profile click{' '}
							<Link to="/register">here</Link>
							{/* <a href="index.html">here</a> */}
						</span>
					</p>
				</div>
			</form>
		</section>
	);
}

export default Login;
