import React, { useEffect } from 'react';

import './Home.css';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';

function HomePage() {
    return (
        <>
            <IntroSection />
            <AboutSection />
        </>
    );
}

export default HomePage;