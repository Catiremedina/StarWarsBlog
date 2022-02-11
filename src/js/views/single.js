
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



const Single = item => {
	const { store, actions } = useContext(Context);
	const { uid, endpoint } = useParams();
	const [detail, setDetail] = useState({});
	useEffect(() => {
		if (uid) {
			for (let arr in store) {
				if (arr == endpoint) {
					let newItem = store[endpoint].find(item => {
						return item.uid == uid;
					});
					setDetail(newItem);
				}
			}
		}
	}, []);
	return (
		<div className="container char-row">
			<div className="row mt-5 character__card">
				<div className="col">
					<img src="https://via.placeholder.com/800x600" className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h3 className="card-title">
							<strong>{detail.name}</strong>
						</h3>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<Link to={`/`} type="button" className="btn btn-warning homebutton">
							Go back home!
						</Link>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col character__info">
					<h1> </h1>
				</div>
			</div>
		</div>
	);
};
export default Single;






// import React, { useState, useEffect, useContext } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Context } from "../store/appContext";


// export const Single = () => {
// 	const { id, endpoint } = useParams();
// 	const [details, setDetails] = useState({});
// 	const { store, actions } = useContext(Context);

// const getDetails = async () =>{
// 	try {
// 		let response = await fetch(`${store.urlBase}/${endpoint}/${id}`, {
// 			method: "GET",
// 			headers: {
// 				 "Content-Type": "application/json",
// 				},
// 		});
// 		let data = await response.json()
// 		setDetails(data);
// 	}
// 	catch (error) {
// 		console.log(error)
// 	}
// 	};

// 	useEffect(()=>{
// 		getDetails();
// 	},[]);


// 	return (
// 		<div className="container">
// 			<div className="uniqueElement">
// 				<h1>{` ${details}`}</h1>
// 				<Link to="/" type="button" className="btn btn-outline-info">
// 					Back home
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default Single;