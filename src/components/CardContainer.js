import { eventInfo } from "../utils/constants";
import Card from "./Card";

const CardContainer = () => {
	return (
		<section className="cardContainer">
			{eventInfo.map((element, index) => (
				<Card
					key={index + "eventInfo"}
					propsEventData={element}
				/>
			))}
		</section>
	);
};

export default CardContainer;
