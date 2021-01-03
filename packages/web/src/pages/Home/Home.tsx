import React, {useContext} from 'react';

import Hero from '../../sections/Hero/Hero';
import Services from '../../sections/Services/Services';
import Blog from '../../sections/Blog/Blog';
import Contact from '../../sections/Contact/Contact';

import Navigation from '../../components/Navigation/Navigation';
import {AppContext} from '../../components/AppProvider/AppContext';

function Home(): JSX.Element {

  const {theme, toggleTheme} = useContext(AppContext);
  console.log(theme);
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