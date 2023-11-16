import { css } from '../../../styled-system/css'
import Image from "next/image"
import Logo from '../../../public/images/logo.svg'
import MoonIcon from '../../../public/images/moon.svg'

const heading = css({
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'inter',
  display: 'none',
  md: {
    display: 'block'
  }
});

const IconButton = css({
  padding: '1rem',
  borderRadius: '50%',
  background: 'none',
  '&:hover': {
    background: '#dcdcdc'
  }
});

const navLink = css({
  fontWeight: 'bold',
  md: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontFamily: 'inter',

    '&:hover': {
      paddingBottom: '0.5rem',
      borderBottom: '2px solid #FFCD41'
    }
  }
});

const headerContainer = css({
  display: 'grid',
  padding: '0 1rem',
  md: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
  }
});

const navContainer = css({
  background: '#FBFBFB',
  padding: '0.5rem',
  marginTop: '1rem',
  md: {
    display: 'grid',
    gap: '1rem',
    alignItems: 'center',
    gridTemplateColumns: '1fr auto',
    background: 'none',
    padding: '0',
    marginTop: '0'
  }
})
function Header() {
  return (
    <header className={headerContainer}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={Logo} alt="logo" width="60" height="62" />
          <h1 className={heading}>Fahad Ahmed</h1>
        </div>
      </div>
      <div className={navContainer}>
        <div>
          <a href="/" className={navLink}>Home</a>
          {/* <a href="/about" className={navLink} style={{ marginLeft: '1rem' }}>About Me</a> */}
          <a href="/blog" className={navLink} style={{ marginLeft: '1rem' }}>Blog</a>
          {/* <a href="/projects" style={{ marginLeft: '1rem' }} className={navLink}>Projects</a> */}
          <a href="https://github.com/fahadahmed" style={{ marginLeft: '1rem' }} className={navLink}>GitHub</a>
          <a href="mailto:fahad.ahmed@me.com" style={{ marginLeft: '1rem' }} className={navLink}>Contact</a>
        </div>
        {/* <a href="#">
          <div className={IconButton}>
            <Image src={MoonIcon} alt="toggle theme" width="24" height="24" />
          </div>
        </a> */}

      </div>
    </header>
  )
}

export default Header;