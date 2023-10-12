import { gql } from '@apollo/client'
import { css } from '../../styled-system/css'
import NewsletterForm from '@/components/NewsletterForm/NewsletterForm'
import { getClient } from '@/libs/client'

const query = gql`
  query {
    issues (filters: { latest: { eq: true }}) {
      data {
        id
        attributes {
          name
          number
          description
          desktopLayout
          posts {
            data {
              id
              attributes {
                title
                summary
                slug
                Order
                coverImage {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                tags {
                  data {
                    id
                    attributes {
                      title
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

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


export default async function Home() {
  const { data } = await getClient().query({
    query,
    context: {
      next: {
        revalidate: true
      }
    }
  });
  const posts = data.issues.data[0].attributes.posts.data;
  const issue = data.issues.data[0].attributes;

  async function subscribe() {
    'use server'
    // connect to the firebase function addSubscriber
    // send the form data
  }
  return (
    <div className={container}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>
        <div>
          <div>
            <h1 className={title}>Hello, I&apos;m Fahad.</h1>
            <p className={content}>Welcome to my website.</p>
            <p className={content}>I am a software engineer based in Melbourne, Australia. I build web & mobile apps and websites using serverless tech stacks. I currently work as a Frontend Manager at Ernst & Young (EY).</p>
          </div>
          <form action={subscribe} method="POST">
            <NewsletterForm />
          </form>
        </div>
        <div className={issueContainer}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontWeight: 'bold', fontSize: '32px' }}>{issue.name}</h2>
              <p style={{ fontWeight: '300', fontSize: '1.25rem' }}>{issue.description}</p>
            </div>
            <div className={issueStamp}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>ISSUE</div>
              <div className={issueNumber}>#{issue.number}</div>
            </div>
          </div>
          {posts.map((post: any) => (
            <div key={post.id} style={{ borderBottom: '1px solid #E1DEDE', paddingBottom: '2rem', paddingTop: '2rem', fontSize: '1.5rem', fontWeight: 'normal' }}>
              <a href={`blog/${post.attributes.slug}`}><h3 className={issueLink}>{post.attributes.title}</h3></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
