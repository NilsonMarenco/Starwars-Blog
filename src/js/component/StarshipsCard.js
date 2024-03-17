import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";



export const StarshipsCard = (props) => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);

	const [styleTextButtonLearnMore, setStyleTextButtonLearnMore] = useState("text-info");
	const [styleFavoriteButton, setStyleFavoriteButton] = useState("btn-outline-warning")
	const [styleHeart, setStyleHeart] = useState("fa-heart")
	const [favIsClicked, setfavIsClicked] = useState(false) //estado para detectar si el botón fav esta clicado y que no se cambie el style

	// boton Learn more que cuando haya hover se ponga el texto blanco
	const handleHoverInButton = () => {
		setStyleTextButtonLearnMore("text-white");
	}
	// al quitar el hover vuelva al texto en azul
	const handleHoverOutButton = () => {
		setStyleTextButtonLearnMore("text-info");
	};


	function handleHoverFav() {
		setStyleFavoriteButton("btn-warning");
		setStyleHeart(`fa-star text-white`)
	}


	function handleLeaveFav() {
		// Si el boton de fav esta clickado se quedará el icono blanco y el fondo amarillo
		if (!favIsClicked) {
			setStyleFavoriteButton("btn-outline-warning")
			setStyleHeart("") //quitamos la clase fa-star para que no aparezca la estrella y aparezca el corazón
		}
	}

	const handleClickFavButton = () => {
		setfavIsClicked(true);
		setStyleFavoriteButton("btn-warning");
		setStyleHeart(`fa-star text-white`)
	}

	useEffect(() => {
		const isInFavorites = store.favorites.some(item => item.name === props.name);
		console.log(isInFavorites)
		if (isInFavorites) {
			setStyleFavoriteButton("btn-warning");
			setStyleHeart(`fa-star text-white`)
		} else {
			setStyleFavoriteButton("btn-outline-warning")
			setStyleHeart("")
			setfavIsClicked(false)
		}
	}, [store.favorites]) //Cada vez que cambie store.favorites se ejecutará el useEffect.



	return (
		<div className="card mx-0 pl-0" style={{ width: "18rem" }}>
			<img src={`https://starwars-visualguide.com/assets/img/starships/${props.id}.jpg`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
			</div>
			<div className="card-body d-flex justify-content-between">
				<button type="button" className="btn btn-sm m-3 btn-outline-info" onMouseEnter={handleHoverInButton} onMouseLeave={handleHoverOutButton}>
					<Link className={`btn text-info ${styleTextButtonLearnMore}`} to={`/starships/${props.id}`} >
						Learn More...
					</Link>
				</button>
				<button type="button" className={`btn ${styleFavoriteButton} p-3 btn-sm m-3`} onMouseEnter={handleHoverFav} onMouseLeave={handleLeaveFav} onClick={() => { actions.addFavoritesCharacters(props.name, props.id, "starships"); handleClickFavButton(); }} >
					<i className={`fa ${favIsClicked ? "fa-star text-white" : "fa-heart"}`}></i>
				</button>
			</div>
		</div>
	);
};





StarshipsCard.propTypes = {
	history: PropTypes.object,
	name: PropTypes.string,
	id: PropTypes.number
};
