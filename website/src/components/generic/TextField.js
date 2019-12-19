import React from 'react';
import PropTypes from 'prop-types';

export const TextField = (props) => {
    const width = props.parentType === 'popup' ? 500 : 1000;
    var styles = {
        label: {
            margin: 10,
            marginTop: 15
        },
        textField: {
            width: width,
            height: 40,
            boxSizing: 'border-box',
            borderRadius: 5,
            padding: 5,
            margin: 10,
            marginTop: 5
        }
    }

    return (
        <div
            className="textField">
            <label
                style={styles.label}
                htmlFor={props.id}>
                {props.label}*
                </label>
            <br></br>
            <input
                style={styles.textField}
                id={props.id}
                type="text"
                name={props.name}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    );
}

TextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}