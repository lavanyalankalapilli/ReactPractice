import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
    var buttonStyle = {
        width: 100,
        height: 40,
        fontWeight: 700,
        fontSize: 15,
        padding: 2,
        border: '2px solid black',
        background: 'white',
        borderRadius: 5,
        margin: 10,
        marginLeft: 10,
        cursor: 'pointer'
    }

    return (
        <input
            type="submit"
            value={props.label}
            style={buttonStyle}
            {...props}
        >
        </input>

    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired
}