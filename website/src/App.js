import React from 'react';
import { ContactMe } from './components/contact/ContactMe';
import { GalleryContainer } from './components/gallery/GalleryContainer';
import { HomeContainer } from './components/Home/HomeContainer';
import { AboutMe } from './components/about/AboutMe';
import { Tabs } from './components/navigation/Tabs'

export const App = () => {
    return (
        <Tabs>
            <div label="Home">
                <HomeContainer />
            </div>
            <div label="About">
                <AboutMe />
            </div>
            <div label="Contact">
                <ContactMe />
            </div>
            <div label="Gallery">
                <GalleryContainer />
            </div>
        </Tabs>

    );
}