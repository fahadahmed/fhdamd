import { css } from '../../styled-system/css'
import { Header } from '@/components';

const container = css({
  backgroundColor: '#303031',
  height: '100vh',
  color: '#BCBABA',
  display: 'grid',
  gridTemplateRows: '100px 1fr 50px'
})
const title = css({
  fontFamily: 'Rubik, sans-serif',
  fontSize: '64px',
  fontWeight: 'bold',
  paddingTop: '6rem'
})

const content = css({
  fontFamily: 'Rubik, sans-serif',
  fontSize: '32px',
  fontWeight: 'regular',
  paddingTop: '2rem'
})

const issueContainer = css({
  background: '#BCBABA',
  color: '#41424D',
  margin: '10rem 4rem 0 4rem',
  padding: '2rem',
  fontSize: '32px',
  fontWeight: 'light',
})

const issueStamp = css({
  background: '#FFCD41',
  padding: '1rem',
  marginTop: '-4rem'
})

const newsletterTitle = css({
  fontFamily: 'Rubik, sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
})

const newsletterContent = css({
  fontFamily: 'Rubik, sans-serif',
  fontSize: '20px',
  fontWeight: 'regular',
})

const subscribeButton = css({
  fontFamily: 'Rubik, sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#FFCD41',
  border: '1px solid #FFCD41',
  padding: '1rem 3rem',
  marginTop: '1rem'
})

async function getData() {
  const res = [
    {
      id: 1,
      title: 'Integrating Firebase with Remix apps',
      slug: 'integrating-firebase-with-remix-apps'
    },
    {
      id: 2,
      title: 'Building data-driven dynamic forms with Remix, remix-validated-form & zod',
      slug: 'building-data-driven-dynamic-forms-with-remix-remix-validated-form-zod'
    },
    {
      id: 3,
      title: 'How to implement styles using Panda CSS in Remix apps',
      slug: 'how-to-implement-styles-using-panda-css-in-remix-apps'
    }
  ]
  return res;
}

export default async function Home() {
  const posts = await getData();
  return (
    // <main className={container}>
    //   <Header />
    //   <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
    //     <div>
    //       <div>
    //         <h1 className={title}>Hello, I&apos;m Fahad.</h1>
    //         <p className={content}>Welcome to my website.</p>
    //         <p className={content}>I am a software engineer based in Melbourne, Australia. I build web & mobile apps and websites using serverless tech stacks. I currently work as a Frontend Manager at Ernst & Young (EY).</p>
    //       </div>
    //       <div style={{ marginTop: '2rem' }}>
    //         <h3 className={newsletterTitle}>Newsletter</h3>
    //         <p className={newsletterContent}>Sign-up for my newsletter and receive updates for when a new issue is released. I will not spam you.</p>
    //         <button className={subscribeButton}>Sign-up to newsletter</button>
    //       </div>
    //     </div>
    //     <div className={issueContainer}>
    //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    //         <h2 style={{ fontWeight: 'bold' }}>Latest Issue</h2>
    //         <div className={issueStamp}>
    //           <div style={{ fontSize: '16px', fontWeight: 'bold' }}>ISSUE</div>
    //           <div style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'monospace' }}>No. 1</div>
    //         </div>
    //       </div>
    //       {posts.map((post) => (
    //         <div key={post.id} style={{ borderBottom: '1px solid #E1DEDE', paddingBottom: '2rem', paddingTop: '2rem' }}>
    //           <a href={`blog/${post.slug}`}><h2>{post.title}</h2></a>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>site built by Fahad Ahmed | copyrighted 2023</div>
    // </main>
    <div>Home</div>
  )
}
