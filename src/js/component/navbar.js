import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src={logo} className="navbar-brand logoi mb-0"/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars Blog</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className=" fs-6 dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites {` (${store.favs.length})`}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						{store.favs.map(favs => {
							return (
								<li className="d-flex justify-content-between" key={favs.name}>
									{favs.name}
									<Link
										to={`/${favs.name}/${favs.uid}`}
										seccion="button"
										className="btn btn-outline-primary"
									/>
									<i
										className="far fa-trash-alt"
										onClick={() => {
											actions.delFav(favs.name);
										}}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			
			</div>
		</nav>
	);
};
