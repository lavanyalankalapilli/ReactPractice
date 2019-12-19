import React from 'react';
import { Image } from '../generic/Image'
import PropTypes from 'prop-types';

export const Gallery = (props) => {

    var styles = {
        container: {
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gridGap: 25,
            alignItems: 'stretch',
            marginLeft: 200,
            marginRight: 200,
            marginTop: 50,
        }
    }

    return (
        <div style={styles.container} >
            {props.pics.map(item => (
                <Image id={item.id} src={item.url} name={item.name} key={item.id} onClick={props.onClick} />
            ))}
        </div>
    );
}

Gallery.propTypes = {
    pics: PropTypes.instanceOf(Array).isRequired,
    onClick: PropTypes.func.isRequired,
}