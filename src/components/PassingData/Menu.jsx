import { MenuItem } from './MenuItem.jsx';

export const Menu =() => {
	const handleOrder = (itemName, itemPrice) => {
		alert(`Your order: ${itemName} for $${itemPrice}`);
	};

	return (
		<div>
			<h2>Adonis Menu</h2>	
			<MenuItem name="Spaghetti Bolognese" price={12.99} onOrder={handleOrder} />
			<MenuItem name="Milanesa de Res" price={19.65} onOrder={handleOrder} />
			<MenuItem name="Pulpo al carbon" price={23.27} onOrder={handleOrder} />						
		</div>
	);
}
