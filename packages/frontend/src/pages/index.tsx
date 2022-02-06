import React from 'react';

function IndexPage() {
  console.log(process.env.GATSBY_APP_APP_ID);

  return (
    <div>
      <h2>Hello React</h2>
      <p>Testing husky and lint-staged</p>
      <p>Making another change</p>
    </div>
  );
}

export default IndexPage;
