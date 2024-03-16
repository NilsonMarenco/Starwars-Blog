import React, { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/home.css'

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h2 className="item-name">Characters</h2>
					<div className="d-flex flex-row container-tarjetas" style={{ overflowX: "auto" }}>
						{store.people.map((character) => (
							<div className="m-3" key={character.uid}>
								<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />
								<h3 className="name">{character.name}</h3>
								<button type="button" class="btn btn-outline-warning">
									<span className="heart-icon">♥</span>
								</button>

							</div>
						))}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h2 className="item-name">Vehicles</h2>
					<div className="d-flex flex-row container-tarjetas" style={{ overflowX: "auto" }}>
						{store.vehicles.map((vehicle) => (
							<div className="m-3" key={vehicle.uid}>
								<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} />
								<h4 className="name">{vehicle.name}</h4>
								<button type="button" class="btn btn-outline-warning">
									<span className="heart-icon">♥</span>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h2 className="item-name">Planets</h2>
					<div className="d-flex flex-row container-tarjetas" style={{ overflowX: "auto" }}>
						{store.planets.map((planet) => (
							<div className="m-3" key={planet.uid}>
								<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} />
								<h3 className="name">{planet.name}</h3>
								<button type="button" class="btn btn-outline-warning">
									<span className="heart-icon">♥</span>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
