import React from 'react';

export const HomeContainer = () => {

    const styles = {
        home: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            marginTop: '10%',
            width: '100%',
            backgroundColor: '#191a1d'
        },
        intro: {
            float: 'left',
            textAlign: 'left',
            marginLeft: 300,
            marginTop: 100,
            width: 500,
        },
        h1: {
            fontFamily: '"Rubik","Arial",sans-serif',
            fontSize: '4rem',
            color: '#fff',
            fontWeight: 400,
            lineHeight: '100%',
        },
        h2: {
            fontFamily: '"Rubik","Arial",sans-serif',
            fontSize: '2.125rem',
            color: '#ababab',
            fontWeight: 300,
            lineHeight: '140%',
        },
        picture: {
            float: 'right',
            width: 350,
            height: 450,
            marginRight: 500,
            marginTop: 100,
            borderRadius: 10,
            boxShadow: '0 5px 30px grey',
            color: '#5e5e5e',

        },

    };

    return (
        <div style={styles.home} >
            <div style={styles.intro}>
                <h1 style={styles.h1}>Hey, I'm Lavanya</h1>
                <h2 style={styles.h2}>I am a Full Stack developer. I love building things and solving complex problems.</h2>
            </div>
            <div className="photo">
                <img src='images/lav.jpg' alt='lavanya' style={styles.picture} />
            </div>
        </div>
    );
}