import { css } from "../../../styled-system/css"
import { Tag } from '@/components'

const container = css({
  background: '#FBFBFB',
  color: '#41424D',
  padding: '1rem',
});

const containerHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  alignItems: 'center'
});

const issueStamp = css({
  background: '#E1DEDE',
  padding: '0.5rem 1rem',
  textAlign: 'right',
});

const issueStampLatest = css({
  background: '#FFCD41',
  padding: '0.5rem 1rem',
  textAlign: 'right',
});

const issueNumber = css({
  fontSize: '32px', fontWeight: '700', fontFamily: 'knewave'
});

const issueTitle = css({
  margin: '0',
  fontSize: '20px'
});

const issueSubTopicTitle = css({
  fontFamily: 'inter',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase',
});

const issueLink = css({
  font: 'inter',
  fontSize: '14px',
  fontWeight: '400',
  '&:hover': {
    fontWeight: 'bold',
  }
});

interface CardProps {
  title: string,
  description: string,
  issue: number,
  latest: boolean,
  posts: any[]
}

export default function Card({ title, description, issue, posts, latest }: CardProps) {

  const uniqueTags: Set<string> = new Set();
  posts.forEach((post: any) => {
    post.attributes.tags.data.forEach((tag: any) => {
      uniqueTags.add(tag.attributes.title);
    })
  });

  console.log(uniqueTags)
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={latest ? issueStampLatest : issueStamp}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase' }}>{latest ? `Latest` : `Issue`}</div>
          <div className={issueNumber}>#1</div>
        </div>
        <div>
          <h2 className={issueTitle}>{title}</h2>
          <p style={{ margin: '0', fontSize: '12px', }}>{description}</p>
        </div>

      </div>

      <div style={{ marginTop: '2rem' }}>
        <div>
          <h3 className={issueSubTopicTitle}>Topics</h3>
          <div style={{ width: '100%', display: 'inline-block' }}>
            {Array.from(uniqueTags).map((tag: string) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
        <div style={{ margin: '1rem 0' }}>
          <h3 className={issueSubTopicTitle}>Posts</h3>
          {posts.map((post: any) => (
            <div key={post.id} style={{ borderBottom: '1px solid #E1DEDE', paddingBottom: '0.5rem', paddingTop: '0.5rem', fontSize: '1.5rem', fontWeight: 'normal' }}>
              <a href={`blog/${post.attributes.slug}`}><h3 className={issueLink}>{post.attributes.title}</h3></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}