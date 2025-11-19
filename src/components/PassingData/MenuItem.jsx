export const MenuItem = ({ name, price, onOrder }) => {
	return (
		<>
			<span>{name} - ${price}</span>&nbsp;
			<buton 
				onClick={() => onOrder(name, price)}>&nbsp; &nbsp; &nbsp; Order Now
			</buton>
			<br />
		</>		
	);
}