import React from 'react';
import PropTypes from 'prop-types';

export const TextArea = (props) => {
    var styles = {
        label: {
            margin: 10,
        },
        textArea: {
            width: 1000,
            height: 100,
            boxSizing: 'border-box',
            borderRadius: 5,
            padding: 5,
            margin: 10
        }
    }

    return (<div className="textArea" >
        <label style={styles.label}
            htmlFor={props.id}>
            {props.label}*
        </label>
        <br></br>
        <textarea
            style={styles.textArea}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            {...props}
        />
    </div>
    );
}

TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}