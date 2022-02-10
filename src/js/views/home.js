import React, { useContext, useEffect } from "react";
import Card from "../component/card";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Home = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<p className="fs-1 fw-bold text-info d-flex justify-content-center">PEOPLE</p>
				</div>
			</div>
			<div className="row d-flex horizon">
				{store.people.map(item => {
					return <Card key={item.uid} item={item} seccion="people" />;
				})}
			</div>

			<div className="row">
				<div className="col-12">
				<p className="fs-1 fw-bold text-info d-flex justify-content-center">PLANETS</p>
				</div>
			</div>
			<div className="row d-flex horizon">
				{store.planets.map(item => {
					return <Card key={item.uid} item={item} seccion="planets" />;
				})}
			</div>

			<div className="row">
				<div className="col-12">
				<p className="fs-1 fw-bold text-info d-flex justify-content-center">VEHICLES</p>
				</div>
			</div>
			<div className="row d-flex horizon">
				{store.vehicles.map(item => {
					return <Card key={item.uid} item={item} seccion="vehicles" />;
				})}
			</div>
		</div>
	);
};