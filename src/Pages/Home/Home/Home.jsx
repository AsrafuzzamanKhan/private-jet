import React from 'react';
import Banner from '../Banner/Banner';
import { SliderData } from '../../../data/SliderData';
import InfoSection from '../InfoSection/InfoSection';

const Home = () => {
    return (
        <div>
            <Banner slides={SliderData}></Banner>
            <InfoSection></InfoSection>
        </div>
    );
};

export default Home;