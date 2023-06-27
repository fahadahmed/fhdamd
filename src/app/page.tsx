import Image from 'next/image'
import { css } from '../../styled-system/css'

const heading = css({
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Inter, sans-serif',
})

export default function Home() {
  return (
    <main>
      <div className={heading}>Hello 🐼!</div>
    </main>
  )
}
