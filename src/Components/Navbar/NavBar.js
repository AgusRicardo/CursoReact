import React from 'react';
import logo2 from './logo2.svg';
import '../Navbar/style.css';


const navbar = () => {
    return (
        <React.Fragment>
            <nav className='navbar'>
                    <img src={logo2} alt="" className='logo2'/>
                    <ul className='menu'>
                        <li>Home</li>
                        <li>Page1</li>
                        <li>Page2</li>
                        <li>Page3</li>
                    </ul>
            </nav>
        </React.Fragment>
    )
}

export default navbar