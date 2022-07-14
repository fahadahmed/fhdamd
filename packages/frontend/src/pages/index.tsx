import React from 'react';

function IndexPage() {
  console.log(process.env.GATSBY_APP_APP_ID);

  return (
    <div>
      <h2>Hello React</h2>
      <p>Testing husky and lint-staged - testing date: 14 Jul 2022</p>
      <p>Making another change</p>
    </div>
  );
}

export default IndexPage;
