import React from "react";
import PropTypes from "prop-types";


export const ActionButton = ({text, myOnClick}) => {
	return <button onClick={myOnClick}>{text}</button>;
}

