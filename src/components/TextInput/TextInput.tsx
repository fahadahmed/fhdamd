import { css } from '../../../styled-system/css'

const styles = css({
  padding: '1rem 2rem',
  border: '0.125rem solid #41424D',
  background: '#FBFBFB',
  fontFamily: 'inter',
  width: '100%',
  '&:focus-visible': {
    borderRadius: '0',
    border: '0.125rem solid #FFCD41',
    outline: 'none'
  }
})

type TextInputProps = {
  onChange: (value: string) => void;
  placeholderText?: string;
  inputType?: 'text' | 'password' | 'email' | 'number';
}
export default function TextInput({ onChange, placeholderText, inputType = 'text' }: TextInputProps) {
  return (
    <input type={inputType} className={styles} placeholder={placeholderText} onBlur={(e) => onChange(e.target.value)} />
  )
}