import React, { Suspense } from 'react';

const HomeJourney = React.lazy(() => import('../journeys/Home'));

function Home() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <HomeJourney />
    </Suspense>
  );
}

export default Home;
