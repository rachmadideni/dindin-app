import React from "react";
import classNames from 'classnames';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const PhoneInput = props => {
	const defaultContainerClassName = "intl-tel-input bg-white shadow-sm rounded-3 border-radius-lg"
	const containerClassNameWrapper = classNames(defaultContainerClassName, props.hasError);
	return <IntlTelInput containerClassName={containerClassNameWrapper} {...props} />;	
}

export default PhoneInput;