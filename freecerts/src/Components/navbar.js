import './navbar.css';

import {NavLink,Link} from 'react-router-dom';


export default function Navbar(){
    return  <>
        <nav>
            <h1 className='nav-logo'><Link to="/">CertiFree</Link></h1>
            <img className='nav-logo' src='./WebsiteLogo1.png' alt='WebsiteLogo'></img>
            <ul className='nav-items'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/how-it-works">How it Works?</NavLink></li>
                <li><NavLink to = "/courses">Courses</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
            </ul>
        </nav>
    </>
}