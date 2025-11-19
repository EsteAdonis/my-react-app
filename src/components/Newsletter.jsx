import { ActionButton } from "./ActionButton.jsx";	

export const Newsletter = () => {

	const handleSubscribe = () => {
		alert("Subscribed to the newsletter!");
	};

	return (
		<div>	
			<h2>Subscribe to our Newsletter</h2>
			<p>Stay updated with our latest news and offers!</p>
			<ActionButton text="Subscribe Now" myOnClick={handleSubscribe} />
		</div>
	);
}