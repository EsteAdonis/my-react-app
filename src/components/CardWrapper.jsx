export const CardWrapper = ({ title, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			<div classNam="card-Name">{children}</div>
		</div>
	);
}
