import { css } from '../../../styled-system/css'

const styles = css({
  fontFamily: 'inter',
  fontSize: '0.75rem',
  fontWeight: '700',
  borderRadius: '0.125rem',
  backgroundColor: '#E1DEDE',
  color: '#41424D',
  padding: '0.25rem 0.5rem',
  textTransform: 'uppercase',
  margin: '0.25rem',
  // '&:hover': {
  //   backgroundColor: '#ffcd41',
  //   cursor: 'pointer'
  // }
})

type TagProps = {
  label: string;
  // onClick: (value: string) => void;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className={styles}>{label}</span>
  )
}