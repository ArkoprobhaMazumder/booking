import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">
              <NavLink className="nav-link" to="/">Mybooking</NavLink>
            </span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Navbar
