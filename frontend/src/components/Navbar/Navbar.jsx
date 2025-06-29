import { Link } from 'react-scroll'
import './Navbar.css'

function App() {


    return (
      <nav className='container'>
        <span className='logo text glow'>V I G O U R</span>
        <div className='text'>
            <div className='glow link'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></div>
            <div className='glow link'><Link to='program' smooth={true} offset={40} duration={500}>Programs</Link></div>
            {/* <div className='glow link'><Link to='program' smooth={true} offset={40} duration={500}>Testimonials</Link></div> */}
            <div className='glow link'><Link to='footer' smooth={true} offset={40} duration={500}>About</Link></div>
            {/* <div className='glow link'><Link to='footer' smooth={true} offset={40} duration={500}>Contact</Link></div> */}
            <div className='glow link'>
              <img src="https://w7.pngwing.com/pngs/67/469/png-transparent-computer-icons-login-button-miscellaneous-orange-computer-thumbnail.png" alt="" />
            </div>
        </div>
      </nav>
    )
  }
  
  export default App
  