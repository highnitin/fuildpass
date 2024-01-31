import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import EventPage from "./EventPage";
import Footer from "./Footer";

const App = () => {
	return (
		<section className="containerSection">
			<Header />
			<EventPage />
			<Footer />
		</section>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);