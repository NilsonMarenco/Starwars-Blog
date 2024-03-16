import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/favorites.css";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">

		</div>
	);
};
