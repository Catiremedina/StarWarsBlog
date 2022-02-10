import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

const Card = ({ item, seccion }) => {
	const { store, actions } = useContext(Context);

	return (
		
        
        <div className="card ml-5">
			<img src="https://www.placecage.com/300/200" className="cardimg" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<div className="d-flex justify-content-between">
					<Link to={`/${seccion}/${item.uid}`} seccion="button" className="btn">
						See more!
					</Link>
					<i
						className="fas fa-heart fs-2"
						onClick={() => {
							actions.addFavItem(item.name, seccion);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;

    Card.propTypes = {
	item: PropTypes.object,
	seccion: PropTypes.string
};