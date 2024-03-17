import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";


export const StarshipsInfo = (props) => {
	const [state, setState] = useState({
		

	});


	const { store, actions } = useContext(Context);



	return (

		<div className="mb-3 mx-auto container d-flex justify-content-center col-lg-8 col-md-10 col-sm-12" style={{ width: "50rem" }}>


			<img src={`https://starwars-visualguide.com/assets/img/starships/${props.id}.jpg`} className="card-img-top p-3 w-50" alt="..." />
			<div className="card-body justify-content-center ml-4 col-6 mx-3">
				<h1 className="card-title text-danger">{props.name}</h1>
				<p><strong>Model:</strong>{props.model}</p>
				<p><strong>Consumables:</strong>{props.consumables}</p>
				<p><strong>Manofacturer:</strong>{props.manofacturer}</p>
				<p><strong>Cost in Credits:</strong>{props.cost_in_credits}</p>
				<p><strong>Created:</strong>{props.created}</p>
				<p><strong>Crew:</strong>{props.crew}</p>
				<p><strong>Hyperdripe hyperdrive_rating:</strong>{props.hyperdrive_rating}</p>


			</div>
		</div>
	);
};




StarshipsInfo.propTypes = {
	model: PropTypes.string,
	consumables: PropTypes.string,
	created: PropTypes.string,
	manofacturer: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number,
	cost_in_credits: PropTypes.string,
	crew: PropTypes.string,
	hyperdrive_rating: PropTypes.string,
};

