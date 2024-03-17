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
			characters: [],
			charactersInfo: {},
			planets: [],
			planetsInfo: {},
			starships: [],
			starshipsInfo: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => {
						console.log(res.status)
						//if (res.status === 200){
						//	getActions().getCharactersInfo();
						//}
						return res.json();
					})

					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err))
			},
			getCharactersInfo: (characterId) => {
				fetch(`https://www.swapi.tech/api/people/${characterId}`)
					.then(res => {
						console.log(res.status);
						return res.json();
					})

					.then(data => setStore({ charactersInfo: data.result.properties }))

					.catch(err => console.error(err));


			},
			getAllPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => {
						console.log(res.status)
						return res.json();
					})

					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
			},
			getPlanetsInfo: (planetId) => {
				fetch(`https://www.swapi.tech/api/planets/${planetId}`)
					.then(res => {
						console.log(res.status);
						return res.json();
					})

					.then(data => setStore({ planetsInfo: data.result.properties }))

					.catch(err => console.error(err));


			},
			getAllStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(res => {
						console.log(res.status)
						return res.json();
					})

					.then(data => setStore({ starships: data.results }))
					.catch(err => console.error(err))
			},
			getStarshipsInfo: (starshipsId) => {
				fetch(`https://www.swapi.tech/api/starships/${starshipsId}`)
					.then(res => {
						console.log(res.status);
						return res.json();
					})
					.then(data => setStore({ starshipsInfo: data.result.properties }))
					.catch(err => console.error(err));

			},
			addFavoritesCharacters: (characterName, characterId, characterType) => {
				let newArray = getStore().favorites.filter((item) => item.name == characterName)
				if (newArray.length === 0) {
					setStore({ favorites: [...getStore().favorites, { name: characterName, idCharacter: characterId, type: characterType }] })

				}

			},
			addFavoritesPlanets: (planetName, planetId, planetType) => {
				let newArray = getStore().favorites.filter((item) => item.name == planetName)
				if (newArray.length === 0) {
					setStore({ favorites: [...getStore().favorites, { name: planetName, idPlamet: planetId, type: planetType }] })
					console.log(getStore().favorites);
				}
			},
			addFavoritesStarships: (starshipsName, starshipId, starshipType) => {
				let newArray = getStore().favorites.filter((item) => item.name == starshipsName)
				if (newArray.length === 0) {
					setStore({ favorites: [...getStore().favorites, { name: starshipsName, idstarship: starshipId, type: starshipType }] })
					console.log(getStore().favorites);
				}
			},
			deleteFavorites: (deletedFavorite) => {
				setStore({ favorites: getStore().favorites.filter((i, _) => i.name !== deletedFavorite) })
				console.log(getStore().favorites);



			}
		}
	};
};

export default getState;
