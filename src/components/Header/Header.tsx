import { css } from '../../../styled-system/css'
import Image from "next/image"
import Logo from '../../../public/images/logo.svg'
import MoonIcon from '../../../public/images/moon.svg'

const heading = css({
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Rubik, sans-serif',
})

const IconButton = css({
  padding: '1rem',
  borderRadius: '50%',
  background: '#efefef',
  '&:hover': {
    background: '#dcdcdc'
  }
})

function Header() {
  return (
    <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={Logo} alt="logo" width="60" height="62" />
          <h1 className={heading}>Fahad Ahmed</h1>
        </div>
        <div>
          <a href="/blog" style={{ margin: '1rem' }}>Blog</a>
          <a href="/projects" style={{ margin: '1rem' }}>Projects</a>
          <a href="https://github.com/fahadahmed" style={{ margin: '1rem' }}>GitHub</a>
          <a href="mailto:fahad.ahmed@me.com" style={{ margin: '1rem' }}>Contact</a>
        </div>
      </div>
      <div>
        <a href="#">
          <div className={IconButton}>
            <Image src={MoonIcon} alt="toggle theme" width="24" height="24" />
          </div>
        </a>

      </div>
    </header>
  )
}

export default Header;