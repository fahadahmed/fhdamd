import Image from 'next/image'
import { css } from '../../styled-system/css'

const styles = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px'
})

export default function Home() {
  return (
    <main>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
      <div className={styles}>
        <p>Hello World</p>
      </div>
    </main>
  )
}
