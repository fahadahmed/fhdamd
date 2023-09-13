import { css } from '../../../styled-system/css'

const styles = css({
  color: 'secondary',
  bg: 'primary',
  border: `1px solid`,
  borderColor: 'primary',
  padding: '1rem 2.5rem',
  fontFamily: 'inter',
  fontSize: '16px',
  fontWeight: '600',
  '&:hover': {
    bg: 'secondary',
    border: `1px solid`,
    borderColor: 'primary',
    color: 'primary',
    cursor: 'pointer'
  },
});

type ButtonProps = {
  label: string;
  onClick: () => void;

}

function Button({ label, onClick }: ButtonProps) {
  return <button className={styles} onClick={onClick}>{label}</button>;
}

export default Button;