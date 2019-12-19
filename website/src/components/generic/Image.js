import React from 'react';
import PropTypes from 'prop-types';

export const Image = (props) => {

    const styles = {
        close: {
            cursor: 'pointer',
            position: 'absolute',
            top: 5,
            right: 5,
        },

        image: {
            border: '1px solid #ccc',
            boxShadow: '2px 2px 6px 0px  rgba(0,0,0,0.3)',
            width: '100%',
            height: 200,
            borderRadius: 5,
        },

        div: {
            display: 'inline-block',
            position: 'relative',

        }
    }

    const hideImage = (e) => {
        e.target.parentElement.style.display = 'none';
    }

    return (
        <div
            style={styles.div}>
            <img
                style={styles.image}
                src={props.src}
                alt={props.name}
                {...props}
            />
            <span style={styles.close} onClick={hideImage}>&times;</span>
        </div>
    );

}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}