import { ActionButton } from "./ActionButton";

export const Contact = () => {

	const handleMessage = () => {
		alert("Message sent!");
	}

	return (
		<div>	
			<h2>Contact Us</h2>
			<p>If you have any questions, feel free to reach out!</p>
			<ActionButton text="Send Message" myOnClick={handleMessage}/>
		</div>
	);
}