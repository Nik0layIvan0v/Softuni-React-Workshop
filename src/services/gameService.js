const API_URI = 'http://localhost:3030/data';

export function getAll() {
	return fetch(API_URI + '/games?sortBy=_createdOn%20desc').then((res) =>
		res.json()
	);
}

export function getById(id) {
	return fetch(API_URI + '/games/' + id).then((res) => res.json());
}
