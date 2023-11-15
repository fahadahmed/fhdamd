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
  alignItems: 'start'
});

const issueStamp = css({
  background: '#E1DEDE',
  padding: '0.5rem',
  textAlign: 'right',
  marginTop: '-1.5rem'
});

const issueStampLatest = css({
  background: '#FFCD41',
  padding: '0.5rem',
  textAlign: 'right',
  marginTop: '-1.5rem'
});

const issueNumber = css({
  fontSize: '32px', fontWeight: '700', fontFamily: 'knewave'
});

const issueTitle = css({
  margin: '0',
  fontSize: '24px'
});

const issueSubTopicTitle = css({
  fontFamily: 'inter',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase',
})

export default function Card() {
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div>
          <h2 className={issueTitle}>Issue Title</h2>
          <p style={{ margin: '0', fontSize: '16px' }}>This is the issue description</p>
        </div>
        <div className={issueStamp}>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>ISSUE</div>
          <div className={issueNumber}>#1</div>
        </div>
      </div>
      <div>
        <h3 className={issueSubTopicTitle}>Topics</h3>
        <Tag label="Tag 1" />
        <Tag label="Tag 2" />
      </div>
      <div>
        <h3 className={issueSubTopicTitle}>Posts</h3>
        <span>3</span>
        <span>toggleIcon</span>
      </div>
    </div>
  )
}