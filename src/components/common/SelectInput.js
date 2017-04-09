import React, {PropTypes} from 'react';

const SelectInput = function({name, label, onChange, defaultOption, value, error, options}) {

    let hasError = (error && error.length > 0);
    let validationErrorClass = (hasError ? "alert alert-danger" : "hide");

    return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
            {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
            <select
                  name={name}
                  value={value}
                  onChange={onChange}
                  className="form-control">
                  <option value="">{defaultOption}</option>
                  {options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.text}</option>;
                  })
                  }
            </select>
        <div className={validationErrorClass}>{error}</div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
