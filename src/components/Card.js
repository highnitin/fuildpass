const Card = (props) => {
	const {
		imageUrl,
		companyName,
		country,
		date,
		description,
		location,
		name,
		price,
	} = props.propsEventData.eventInfo;

	return (
		<section className="card">
			<img
				className="cardImg"
				src={imageUrl}
				alt="Image Event Page"
			/>
			<h3>
				{name} by {companyName}
			</h3>
			<section className="cardFeaturedSection">
				<p>{date} </p>
				<p>{price} </p>
				<p>{country} </p>
			</section>
			<p>{description}</p>
			<p>{location}</p>
			<button className="buttonCard"> Book Your Passes</button>
		</section>
	);
};

export default Card;
