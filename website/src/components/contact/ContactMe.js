import React from 'react';
import { FormContainer } from './FormContainer';

export const ContactMe = () => {

    const styles = {
        body: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            marginTop: '10%',
            width: '100%',
            backgroundColor: '#fff',
        },
        heading: {
            lineHeight: '115%',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#191a1d',
            fontFamily: '"Rubik","Arial",sans-serif',
            paddingLeft: 400,
            paddingRight: 300,
            paddingTop: 60,
            paddingBottom: 30
        }
    }

    return (
        <div className="form-container" style={styles.body}>
            <h1 style={styles.heading}>Have a web application requirement you'd like to discuss? Server side work request? Just want to say hi? Let's chat... </h1>
            <FormContainer />
        </div>
    );
}

