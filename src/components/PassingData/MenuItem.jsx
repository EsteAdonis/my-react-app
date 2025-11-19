import PropTypes from 'prop-types';

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

MenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onOrder: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
	price: '0.00',
};