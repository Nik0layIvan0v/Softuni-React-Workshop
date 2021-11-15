import style from './ErrorPage.module.css';
function ErrorPage() {
	return (
		<div className={style['error-message']}>
			<h2>Error 404. Page cannot be found!</h2>
		</div>
	);
}

export default ErrorPage;
