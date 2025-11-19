import React from 'react';
import PropTypes from 'prop-types';

export const CardWrapper = ({ title, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			<div classNam="card-Name">{children}</div>
		</div>
	);
}

CardWrapper.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
};

CardWrapper.defaultProps = {
    title: '',
    children: null,
};
