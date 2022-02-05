import React, { Suspense } from 'react';

const Home = React.lazy(() => import('../journeys/Home'));

function IndexPage() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Home />
    </Suspense>
  )
}

export default IndexPage;