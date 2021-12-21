import React from "react";
import "./ProductPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronCircleLeft,
	faRupeeSign,
	faUserCircle,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ProductImg from "./book.jpg";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";

export default function ProductPage() {
	const handleSubmit = async (event) => {
		event.preventDefault();
	};

	return (
		<div className="container">
			<h1>
				Findin{" "}
				<FontAwesomeIcon
					icon={faUserCircle}
					className="user_circle"
					cursor="pointer"
				/>
			</h1>
			<div className="mySearchBar">
				<div className="image_div">
					<div>
						<img src={ProductImg} className="productImg" />
					</div>

					<div className="seller_desc">
						<h2 className="product_name">Product Name </h2>
						<sub className="seller_name">
							Jayden Lacerda
							<FontAwesomeIcon
								icon={faUserPlus}
								className="seller_icon"
								cursor="pointer"
							/>
						</sub>
					</div>
					<div className="item_price">
						<h2>
							<FontAwesomeIcon icon={faRupeeSign} cursor="pointer" /> 200
						</h2>
					</div>
					<div className="quantity">
						<h4>Minimum quantity to be purchased = 50</h4>
						<h4>Maximum quantity that can be purchased = 70</h4>
						<h4>Number of items purchased till now = 40</h4>
					</div>
					<div className="due_date">
						<h3>Due Date: 20 Sept 2021</h3>
					</div>
				</div>
				<div className="qualities_div">
					<h3>quality 1. the product contains this </h3>
					<h3>quality 2. the product contains this </h3>
					<h3>quality 3. the product contains this </h3>
					<h3>quality 4. the product contains this </h3>
					<Divider></Divider>
					<div className="discounts">
            <h2>Offers: </h2>
						<h3>Discount offer 1 </h3>
						<h3>Discount offer 2 </h3>
						<h3>Discount offer 3 </h3>
						<h3>Discount offer 4 </h3>
						<Divider></Divider>
						<Button
							type="submit"
							fullWidth
							variant="outlined"
							sx={{ mt: 3, mb: 2 }}
						>
							Add to cart
						</Button>

						<Button
							type="submit"
							fullWidth
							variant="outlined"
							sx={{ mt: 3, mb: 2 }}
							// onClick={() => {
							//     navigate("/selection");
							// }}
						>
							Buy now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
