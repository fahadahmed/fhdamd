import { css } from '../../../styled-system/css'

const styles = css({
  color: 'primary',
  bg: '#fff',
  border: `1px solid`,
  borderColor: 'primary',
  padding: '10px 20px',
  fontSize: '16px',
  '&:hover': {
    bg: 'primary',
    color: '#fff',
  },
});

function Button() {
  return <button className={styles}>Sign-up for newsletter</button>;
}

export default Button;