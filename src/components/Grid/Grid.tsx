import { css } from "../../../styled-system/css"

const styles = css({
  display: 'grid',
  width: '100%',
  gridAutoRows: 'minmax(20rem, max-content)',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  gap: '1rem',
  padding: '0'
});

interface GridProps {
  children: React.ReactNode,
  id?: string
}

export default function Grid({ children, id }: GridProps) {
  return (
    <div className={styles} id={id}>
      {children}
    </div>
  )
}