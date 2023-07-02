import { css } from '../../styled-system/css'

const heading = css({
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Inter, sans-serif',
})

async function getData() {
  const res = [
    {
      id: 1,
      title: 'Integrating Firebase with Remix apps'
    },
    {
      id: 2,
      title: 'Building data-driven dynamic forms with Remix, remix-validated-form & zod'
    },
    {
      id: 3,
      title: 'How to implement styles using Panda CSS in Remix apps'
    }
  ]
  return res;
}

export default async function Home() {
  const posts = await getData();
  return (
    <main>
      <div className={heading}>Hello 🐼!</div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </main>
  )
}
