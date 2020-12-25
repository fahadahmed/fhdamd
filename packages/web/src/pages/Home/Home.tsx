import React from 'react';

import Hero from '../../sections/Hero/Hero';
import Services from '../../sections/Services/Services';
import Blog from '../../sections/Blog/Blog';
import Contact from '../../sections/Contact/Contact';

import Navigation from '../../components/Navigation/Navigation';

function Home(): JSX.Element {
  return(
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Blog />
      <Contact />
    </div>
  )
}

export default Home;