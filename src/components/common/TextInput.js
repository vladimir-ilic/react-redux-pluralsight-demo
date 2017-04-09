import React, { PropTypes } from 'react';

const TextInput = function ({ name, label, value, onChange, placeholder, error }) {
    let hasError = (error && error.length > 0);
    let formControlClass = "form-group" + (hasError ? "has-error" : "");
    let validationErrorClass = (hasError ? "alert alert-danger" : "hide");

    return (
        <div className={formControlClass}>
            <label htmlFor={name}>{label}</label>
            <input type="text"
                   className="form-control"
                   id={name}
                   name={name}
                   value={value}
                   placeholder={placeholder}
                   onChange={onChange} />
            <div className={validationErrorClass}>{error}</div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;