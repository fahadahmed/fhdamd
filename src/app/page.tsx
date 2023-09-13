'use client'
import { css } from '../../styled-system/css'
import { Button, TextInput } from '@/components'

const container = css({
  color: '#41424D',
  fontWeight: 'light',
  display: 'grid',
})
const title = css({
  fontFamily: 'inter',
  fontSize: '64px',
  fontWeight: '700'
})

const content = css({
  fontFamily: 'inter',
  fontSize: '24px',
  fontWeight: '300',
  paddingTop: '2rem'
})

const issueContainer = css({
  background: '#FBFBFB',
  color: '#41424D',
  margin: '4rem 0 0 4rem',
  padding: '2rem',
  fontFamily: 'inter',
  fontSize: '20px',
  fontWeight: '100',
})

const issueStamp = css({
  background: '#FFCD41',
  padding: '1rem',
  marginTop: '-4rem'
})

const newsletterTitle = css({
  fontFamily: 'inter',
  fontSize: '24px',
  fontWeight: '700',
})

const newsletterContent = css({
  fontFamily: 'inter',
  fontSize: '20px',
  fontWeight: '300',
})

const issueLink = css({
  font: 'inter',
  fontSize: '24px',
  fontWeight: '300',
  '&:hover': {
    fontWeight: 'bold',
  }
})

const issueNumber = css({
  fontSize: '48px', fontWeight: '700', fontFamily: 'knewave'
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
    <div className={container}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>
        <div>
          <div>
            <h1 className={title}>Hello, I&apos;m Fahad.</h1>
            <p className={content}>Welcome to my website.</p>
            <p className={content}>I am a software engineer based in Melbourne, Australia. I build web & mobile apps and websites using serverless tech stacks. I currently work as a Frontend Manager at Ernst & Young (EY).</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h3 className={newsletterTitle}>Newsletter</h3>
            <p className={newsletterContent}>Sign-up for my newsletter and receive updates for when a new issue is released. I will not spam you.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '2rem 0' }}>
              <TextInput placeholderText="Your name" inputType="text" onChange={(value: string) => console.log(value)} />
              <TextInput placeholderText="Email address" inputType="text" onChange={(value: string) => console.log(value)} />
            </div>
            <Button label="Subscribe to newsletter" onClick={() => console.log('Function not implemented')} />
          </div>
        </div>
        <div className={issueContainer}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '32px' }}>Latest Issue</h2>
            <div className={issueStamp}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>ISSUE</div>
              <div className={issueNumber}>No. 1</div>
            </div>
          </div>
          {posts.map((post) => (
            <div key={post.id} style={{ borderBottom: '1px solid #E1DEDE', paddingBottom: '2rem', paddingTop: '2rem', fontSize: '1.5rem', fontWeight: 'normal' }}>
              <a href={`blog/${post.slug}`}><h3 className={issueLink}>{post.title}</h3></a>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div>
    //   {posts.map((post) => (
    //     <div key={post.id} style={{ borderBottom: '1px solid #E1DEDE', paddingBottom: '2rem', paddingTop: '2rem' }}>
    //       <a href={`blog/${post.slug}`}><h2>{post.title}</h2></a>
    //     </div>
    //   ))}
    // </div>
  )
}
