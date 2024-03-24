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
  marginTop: '2rem',
  gap: '4rem',

  lg: {
    gridTemplateColumns: '1fr 1fr',
  }
})
const title = css({
  fontFamily: 'inter',
  fontWeight: '700',
  lg: {
    fontSize: '4rem',
  }
})

const content = css({
  fontFamily: 'inter',
  fontWeight: '300',
  fontSize: '1.25rem',
  lg: {

    fontSize: '1.5rem',
    paddingTop: '2rem'
  }
})

const issueContainer = css({
  margin: '2rem 0',
  background: '#FBFBFB',
  color: '#41424D',
  padding: '1rem',
  lg: {

    margin: '4rem 0 0 4rem',
    padding: '2rem',
    fontFamily: 'inter',
    fontSize: '20px',
    fontWeight: '100',
  }
})

const issueStamp = css({
  background: '#FFCD41',
  padding: '1rem',
  marginTop: '-4rem'
})

const issueLink = css({
  font: 'inter',
  fontSize: '1rem',
  '&:hover': {
    fontWeight: 'bold',
  },
  gridArea: 'issueStamp',
  lg: {
    fontSize: '1.5rem',
  }
})

const issueMeta = css({
  gridArea: 'issueMeta',
})

const issueNumber = css({
  fontSize: '48px', fontWeight: '700', fontFamily: 'inter'
});

const issueHeaderContainer = css({
  display: 'grid',
  gridTemplateAreas:
    `"issueStamp . . ."
    "issueMeta issueMeta issueMeta issueMeta"`,
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  lg: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    alignItems: 'start'
  }
});

const postItem = css({
  borderBottom: '1px solid #E1DEDE',
  fontWeight: 'bold',
  padding: '1rem 0',
  fontSize: '1rem',
  lg: {
    fontWeight: 'normal',
    paddingBottom: '2rem',
    paddingTop: '2rem',
    fontSize: '1.5rem',
  }
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

  async function subscribe(formData: FormData) {
    'use server'
    // connect to the firebase function addSubscriber
    // send the form data
    console.log('The action is working', formData.get('name'), formData.get('email'))
  }
  return (
    <div className={container}>
      <div>
        <div>
          <h1 className={title}>Hello, I&apos;m Fahad.</h1>
          <p className={content}>Welcome to my website <small>(currently in development)</small>.</p>
          <p className={content}>I am a software engineer based in Melbourne, Australia. I build web & mobile apps and websites using serverless tech stacks. I currently work as a Full-stack Engineering Manager at Ernst & Young (EY) where I work on various client projects involving delivery of cloud native solutions using the best in class web technologies.</p>
          <p className={content}>I have experience in delivering highly sophisticated web applications and systems in space technologies, financial industries as well as retail. I build solutions using the React ecosystem, GraphQL, Node.js, .NET (C#) and clouds like Azure, Firebase and GCP.</p>
        </div>
        {/* <form action={subscribe} method="POST">
          <NewsletterForm />
        </form> */}
      </div>
      <div className={issueContainer}>
        <div className={issueHeaderContainer}>
          <div className={issueMeta}>
            <h2 style={{ fontWeight: 'bold', fontSize: '32px' }}>{issue.name}</h2>
            <p style={{ fontWeight: '300', fontSize: '1.25rem' }}>{issue.description}</p>
          </div>
          <div className={issueStamp}>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>ISSUE</div>
            <div className={issueNumber}>#{issue.number}</div>
          </div>
        </div>
        {posts.map((post: any) => (
          <div key={post.id} className={postItem}>
            <a href={`blog/${post.attributes.slug}`}><h3 className={issueLink}>{post.attributes.title}</h3></a>
          </div>
        ))}
      </div>
    </div>
  )
}
