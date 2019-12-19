import React from 'react';

export const AboutMe = () => {

    const styles = {
        container: {
            paddingTop: 40,
            paddingLeft: 400,
            paddingRight: 400,
            alignContent: 'center',
            paddingBottom: 100
        },

        heading: {
            paddingTop: 100,
            textAlign: 'center',
            fontFamily: '"Rubik","Arial",sans-serif',
            fontSize: '3.25rem',
            fontWeight: 400,
            paddingLeft: 450,
            paddingRight: 400
        },
        ques: {
            lineHeight: '115%',
            fontSize: '3.25rem',
            fontWeight: 400,
            color: '#191a1d',
            fontFamily: '"Rubik","Arial",sans-serif'
        },
        ans: {
            lineHeight: '160%',
            fontSize: '1.375rem',
            fontFamily: '"Rubik","Arial",sans-serif',
            fontWeight: 300,
            color: '#191a1d',

        },

        section: {
            maxWidth: '38em',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '2em',
            fontWeight: 300,
            letterSpacing: '0.05em'
        },
        body: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            marginTop: '10%',
            width: '100%',
            backgroundColor: '#fff'
        }
    }

    return (
        <div style={styles.body}>
            <h1 style={styles.heading}>Find out who I am, where I'm from and what I'm all about. </h1>
            <div style={styles.container}>
                <section style={styles.section}>
                    <h1 style={styles.ques}>Who am I..</h1>
                    <p>I am a senior software engineer.</p>
                    <p>I love the internet, technology and solving complex problems.</p>
                </section>
                <section style={styles.section}>
                    <h1 style={styles.ques}>Where I'm From..</h1>
                    <p style={styles.ans}>I hail from Vizag also known as the City of Destiny.</p>
                </section>
                <section style={styles.section}>
                    <h1 style={styles.ques}>Where do I work..</h1>
                    <p style={styles.ans}>I work at Zemoso labs Pvt. Ltd.</p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.ques}>What are your favorite hobbies?</h2>
                    <p style={styles.ans}>My favorite hobby is solving coding questions. If not on laptop, you can find me playing games on mobile
                        or practising calligraphy or doing artworks.
                    </p>
                    <h2 style={styles.ques}>What's your dream job?</h2>
                    <p style={styles.ans}>  My dream job is similar to my current job where I can work in a challenging environment that helps me
                        develop my skills.
                    </p>
                    <h2 style={styles.ques}>Where do you live?</h2>
                    <p style={styles.ans}>I live in the city of pearls, Hyderabad.</p>
                    <h2 style={styles.ques}>What do you specialize in?</h2>
                    <p style={styles.ans}>I am a backend developer with expertise in Java and good experience with frameworks like Spring. I also
                        have good exposure to technologies
                like HTML, CSS, JS, etc.</p>
                </section>
            </div>
        </div>
    );
}