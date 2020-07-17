import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ labelName, type, handleChange, name, value }) => {
    return (
        <div className="form-group">
            <label htmlFor={labelName}>{labelName}</label>
            <input type={type} className="form-control" id={labelName} name={name}
                value={value}
                onChange={(e) => handleChange(e)}
            />

        </div>
    );
}

InputBox.defaultProps = {
    type: 'text'
}

InputBox.propTypes = {
    labelName: PropTypes.string.isRequired
}

export default InputBox;