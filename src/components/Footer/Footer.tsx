import { css } from '../../../styled-system/css';

const styles = css({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1rem 2rem',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 'lighter',
  color: '#41424D'
})

export default function Footer() {
  return (
    <div className={styles}>Site build by Fahad Ahmed | copyrighted 2023</div>
  )
}