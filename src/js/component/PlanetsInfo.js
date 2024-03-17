import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";


export const PlanetsInfo = (props) => {
	const [state, setState] = useState({
		//initialize state here

	});


	const { store, actions } = useContext(Context);



	return (

		<div className="mb-3 mx-auto container d-flex justify-content-center col-lg-8 col-md-10 col-sm-12" style={{ width: "50rem" }}>


			<img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top p- w-50" alt="..." />
			<div className="card-body justify-content-center ml-4 col-6 mx-3">
				<h1 className="card-title text-danger">{props.name}</h1>
				<p><strong>Diameter:</strong>{props.diameter}</p>
				<p><strong>Rotation Period:</strong> {props.rotation_period}</p>
				<p><strong>Orbital Period:</strong> {props.orbital_period}</p>
				<p><strong>Gravity:</strong> {props.gravity}</p>
				<p><strong>Population:</strong> {props.population}</p>
				<p><strong>Climate:</strong> {props.climate}</p>
				<p><strong>Terrain:</strong> {props.terrain}</p>
				<p><strong>Surface Water:</strong> {props.surface_water}</p>




			</div>
		</div>
	);
};




PlanetsInfo.propTypes = {
	history: PropTypes.object,
	diameter: PropTypes.number,
	rotation_period: PropTypes.number,
	orbital_period: PropTypes.number,
	name: PropTypes.string,
	id: PropTypes.number,
	gravity: PropTypes.string,
	population: PropTypes.number,
	climate: PropTypes.string,
	terrain: PropTypes.number,
	surface_water: PropTypes.number
};


