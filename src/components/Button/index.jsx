import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

const btnDefaultClass = "btn btn-lg fw-bold";

const Button = ({ color, type, title, isUppercase, disabled, ...otherProps }) => {

	let computedBtnClass = classNames(btnDefaultClass, { [`btn-${color}`]: true }, { [`btn-${type}`]: type ? true : false }, { 'btn-disabled' : disabled ? true : false } );
	let upperCaseFirstLetter = str => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

	return (
		<button type="button" className={computedBtnClass} {...otherProps}>
			{ isUppercase ? title.toUpperCase() : upperCaseFirstLetter(title)  }
		</button>
	);
}


Button.propTypes = {
	color: PropTypes.oneOf(['primary', 'warning', 'danger', 'success', 'light', 'default']).isRequired,	
	isUppercase: PropTypes.bool
}

export default Button;