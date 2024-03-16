const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}

			],
			people: [],
			planets: [],
			vehicles: [],
			favorites: []

		},
		actions: {


			getPeople: () => {
				fetch('https://www.swapi.tech/api/people')
					.then((response) => response.json())
					.then((datos) => {
						console.log(datos)
						setStore({ people: datos.results })
					})
			},

			getPlanets: () => {
				fetch('https://www.swapi.tech/api/planets')
					.then((response) => response.json())
					.then((datos) => {
						console.log(datos)
						setStore({ planets: datos.results })
					})
			},

			getVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles')
					.then((response) => response.json())
					.then((datos) => {
						console.log(datos)
						setStore({ vehicles: datos.results })
					})
			},
			addToFavorites: () => {

			}


		}
	};
};

export default getState;
