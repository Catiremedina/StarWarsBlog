const getState = ({ getStore, getActions, setStore }) => {

		
	
	
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
		    people: [],
		    planets: [],
		    vehicles: [],
		
	},
	actions: {
		getData: async endpoint => {
			const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/${endpoint}`, {
						method: "GET",
						headers: {
							 "Content-Type": "application/json",
							},
					});
					let data = await response.json()
					setStore({...store,[endpoint]: data.results});
				}
				catch (error) {
					console.log(error)
				}
		},
		addFavItem: (anything, seccion) => {
			let store = getStore();
			let exist = store.favorites.find(element => {
				return element.name == anything;
			});
			if (!exist) {
				if (seccion == "people") {
					let found = store.people.find(item => {
						return item.name == anything;
					});
					setStore({ ...store, favorites: [...store.favorites, found] });
				} else if (seccion == "planets") {
					let found = store.planets.find(item => {
						return item.name == anything;
					});
					setStore({ ...store, favorites: [...store.favorites, found] });
				} else {
					let found = store.vehicles.find(item => {
						return item.name == anything;
					});
					setStore({ ...store, favorites: [...store.favorites, found] });
				}
			}
		},

		deleteFavItem: nametodelete => {
			const store = getStore();
			const newFavs = store.favorites.filter(item => {
				return nametodelete != item.name;
			});
			setStore({
				...store,
				favorites: newFavs
			});
		}
		
			
			}
		}
	};

export default getState;
