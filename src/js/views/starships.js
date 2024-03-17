import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { StarshipsInfo } from "../component/StarshipsInfo.js";


export const Starships = () => {


	const { store, actions } = useContext(Context);



	const params = useParams();


	useEffect(() => {
		actions.getStarshipsInfo(params.theid);
	}, []);


	return (
		<div className="jumbotron">

			<StarshipsInfo
				key={params.theid}
				name={store.starshipsInfo.name}
			    models={store.starshipsInfo.model}
			    consumables={store.starshipsInfo.consumables}
			    manofacturer={store.starshipsInfo.manofacturer}
			    cost_in_credits ={store.starshipsInfo.cost_in_credits}
			    created={store.starshipsInfo.created}
			    crew={store.starshipsInfo.crew}
			    hyperdrive_rating={store.starshipsInfo.hyperdrive_rating}
			// average_lifespan={store.starshipsInfo.average_lifespan}
			// id={params.theid}
			/>


			<hr className="my-4" />

			<Link to="/" className="mx-3">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

