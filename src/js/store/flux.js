const getState = ({ getStore, getActions, setStore }) => {

		
	
	
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
		    people: [],
		    planets: [],
		    vehicles: [],
			favs:[],
			Details:[]
		
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
		
		getDetails: async endpoint => {
			const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/${endpoint}/${item.uid}`, {
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

		adFav: (name, endpoint) => {
			const store = getStore();
			let person;
			let exists = store.favs.find(item => {
				return item.name == name;
			});
			if (!exists) {
				if (endpoint == "people") {
					person = store.people.find(item => {
						return item.name == name;
					});
				} else if (endpoint == "planets") {
					person = store.planets.find(item => {
						return item.name == name;
					});
				} else {
					person = store.vehicles.find(item => {
						return item.name == name;
					});
				}
				setStore({ ...store, favs: [...store.favs, person] });
			}
		},
		delFav: name => {
			const store = getStore();
			const newFavs = store.favs.filter(item => {
				return name != item.name;
			});
			setStore({ ...store, favs: newFavs });
		}
	}
};
};

export default getState;
