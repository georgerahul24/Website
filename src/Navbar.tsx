import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='navbar navbar-expand-lg navbartheme'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'></a>
                <button
                    className='navbar-toggler'
                    type='button'
                    onClick={() => setOpen(!open)}
                    aria-controls='navbarNav'
                    aria-expanded={open ? 'true' : 'false'}
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <Collapse in={open}>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Projects</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Contact Me</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link disabled' href='#'> </a>
                            </li>
                        </ul>
                    </div>
                </Collapse>
            </div>
        </nav>
    );
}

export default Navbar;