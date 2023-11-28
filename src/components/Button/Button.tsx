import { css } from '../../../styled-system/css'

const styles = css({
  color: 'secondary',
  bg: 'primary',
  border: `2px solid`,
  borderColor: 'primary',
  padding: '1rem 2.5rem',
  fontFamily: 'inter',
  fontSize: '16px',
  fontWeight: '600',
  '&:hover': {
    bg: 'secondary',
    border: `2px solid`,
    borderColor: 'primary',
    color: 'primary',
    cursor: 'pointer'
  },
  width: '100%',
  lg: {
    width: 'auto'
  }
});

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';

}

function Button({ label, onClick, type }: ButtonProps) {
  return <button className={styles} onClick={onClick} type={type || "button"}>{label}</button>;
}

export default Button;