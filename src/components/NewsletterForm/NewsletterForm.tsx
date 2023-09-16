'use client'
import { css } from '../../../styled-system/css'
import { Button, TextInput } from '@/components'

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

export default function NewsletterForm() {

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 className={newsletterTitle}>Newsletter</h3>
      <p className={newsletterContent}>Sign-up for my newsletter and receive updates for when a new issue is released. I will not spam you.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '2rem 0' }}>
        <TextInput placeholderText="Your name" inputType="text" onChange={(value: string) => console.log(value)} />
        <TextInput placeholderText="Email address" inputType="text" onChange={(value: string) => console.log(value)} />
      </div>
      <Button label="Subscribe to newsletter" onClick={() => console.log('Function not implemented')} />
    </div>
  )
}