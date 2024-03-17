import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const [state, setState] = useState({


	});



	const { store, actions } = useContext(Context);

	console.log(store.favoritesDatos)


	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-between mb-3 col-lg-12 col-md-12 col-sm-12">
			<Link className="w-5" to="/">
				<img src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" className="card-img-top mx-3" alt="..." style={{ width: "30%" }} />
			</Link>
			<div className="ml-auto">

				<div className="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle mx-3 mr-5" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
						<span className="bg-danger rounded-circle p-1 px-2 mx-1">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
						{store.favorites.length > 0 && store.favorites.map((item, index) => (
							<div className="d-flex flex-row dropdown-item align-items-center justify-content-between">
								<li key={index} ><Link className="align-self-start text-reset text-decoration-none pe-2 mr-5" to={`${item.type}/${item.idCharacter || item.idPlanet || item.idStarship}`}>{item.name}</Link>
									<i className="fa fa-solid fa-trash" onClick={() => actions.deleteFavorites(item.name)}></i>
								</li>

							</div>
						))}
					</ul>
				</div>

			</div>
		</nav>
	);
};
