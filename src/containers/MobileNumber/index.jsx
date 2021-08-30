import React from "react";
import PhoneInput from "../../components/PhoneInput";
import Button from "../../components/Button";

const MobileNumberPage = () => {

	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [isPhoneNumberValid, setPhoneNumberIsValid] = React.useState(false);
	const [validationErrorMessage, setValidationErrorMessage] = React.useState(null);

	const handlePhoneNumber = (isValid, value) => {						
		setPhoneNumber(value);
		setPhoneNumberIsValid(isValid);
	}

	const handleValidation = () => {
		if(!isPhoneNumberValid){			
			setValidationErrorMessage('mobile phone number is invalid!');			
		}
	}	

	return (
		<React.Fragment>
			<div className="row mt-2 mb-2">
	    		<div className="col-12 p-0">
	    			<h4 className="fw-bold">Login/Register</h4>
	    		</div>
    	</div>	    	

    	<div className="d-flex flex-column justify-content-between">
    		<div className="row mt-4 mb-4 flex-1">
	    		<div className="col-12 p-0">
	    			<h4 className="fw-bold">Enter your mobile number</h4>	    			
	    		</div>
	    	</div>

	    	<div className="row flex-1">
	    		<p className="p-0">A one time password (OTP) will be sent to your mobile number via SMS</p>
	    		<PhoneInput     			
			      defaultCountry={'sg'}
			      value={phoneNumber}			      
			      onPhoneNumberChange={handlePhoneNumber}
			      onPhoneNumberBlur={handleValidation}
			      useMobileFullscreenDropdown={false}			      
			      inputClassName="form-control-plaintext"
			      allowDropdown={true}
			      autoHideDialCode={false}
			      separateDialCode={true}
			      hasError={
			      	(validationErrorMessage && !isPhoneNumberValid) ? 'hasError' : ''
			      } />
			      {
			      	(validationErrorMessage && !isPhoneNumberValid) && <small className="text-danger pt-2">{validationErrorMessage}</small>
			      }
    		</div>

    		<div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 w-100 p-4">		    		
	    		<div className="d-grid gap-2">
	    				<Button color="warning" type="pill" title="Next" disabled={!isPhoneNumberValid ? true : false} />
	    				<Button color="default" type="pill" title="go back" />
	    		</div>
	    	</div>

    	</div>

    	</React.Fragment>
	)
}

export default MobileNumberPage;