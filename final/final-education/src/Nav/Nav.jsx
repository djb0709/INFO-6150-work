import './nav.css';
import Button from '../Button/Button';
import { useState } from 'react';
function Nav({ changePage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="header-nav">
            <div className="options">
                <div className="switch-theme">
                    <label htmlFor="mode-switcher">Theme </label>
                    <select id="mode-switcher">
                        <option value="auto">Auto</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>

                </div>

                <Button
                    className='hamburger-menu button-blue'
                    visual='button'
                    onClick={() => { setMenuOpen(!menuOpen) }}
                    a11yLabel="toggle hamburger menu"
                    a11yExpanded={menuOpen}
                    a11yControl='#submenu'

                >
                    <svg xmlns="http://www.w3.org/2000/svg" className='nav-svg hamburger-svg' height="16px" viewBox="0 -960 960 960" width="16px" >
                        <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
                    </svg>
                    Menu
                </Button>
            </div>


            {/* submenu */}


            <ul id='submenu' className={`nav-menu ${menuOpen ? 'open' : ''}`}>

                <li className='menu-item'>
                    <a onClick={changePage} aria-label="home" href="/">
                        {/* google font */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='nav-svg' viewBox="0 -960 960 960"  >
                            <path d="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z" />
                        </svg>
                        Homepage
                    </a>
                </li>

                <li className='menu-item'>
                    <a onClick={changePage} href="/courses" aria-label="courses">
                        {/* google font */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='nav-svg' viewBox="0 -960 960 960">
                            <path d="M384-192q-40.01 0-68.51-28Q287-248 288-288v-72h96v-65.54q-29-1.46-52.5-10.96T288-464v-64h-64L72-672q38-38 89-58t105-20q31.15 0 60.58 8Q356-734 384-720v-48h432v480q0 40-28 68t-68 28H384Zm72-168h216v60q0 15.3 10.29 25.65Q692.58-264 707.79-264t25.71-10.35Q744-284.7 744-300v-396H456v27l216 216.49V-402h-51L521-503l-34 35q-6.84 6.61-14.42 11.81Q465-451 456-446.04V-360ZM253-600h107v97q5.77 2.29 12.02 3.14 6.25.86 12.98.86 14 0 27-5t24-16l33-33-67-68q-27-27-62.5-41.5T266-677q-20.36 0-38.68 3.5T191-662l62 62Zm347 312H360q0 8 4.5 16t18.5 8h223q-2-6-3.5-12t-2.5-12Zm-240 0v24-24Z" />
                        </svg>
                        Courses
                    </a>
                </li >

                <li className='menu-item'>
                    <a onClick={changePage} href="/about" aria-label="about">
                        {/* google font */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='nav-svg' viewBox="0 -960 960 960" >
                            <path d="M480-240q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-36-153h73q0-37 6.5-52.5T555-485q35-34 48.5-58t13.5-53q0-55-37.5-89.5T484-720q-51 0-88.5 27T343-620l65 27q9-28 28.5-43.5T482-652q28 0 46 16t18 42q0 23-15.5 41T496-518q-35 32-43.5 52.5T444-393Zm36 297q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                        </svg>
                        About
                    </a>
                </li>
                <li className='menu-item'>
                    <a onClick={changePage} href="/" aria-label="tbd">
                        {/* google font */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='nav-svg' viewBox="0 -960 960 960" >
                            <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
                        </svg>

                        TBD
                    </a>
                </li>


                {/* 
                <li className='menu-item'>
                    <a onClick={changePage} href="/" aria-label="TBD">
                        {/* google font 
                        <svg xmlns="http://www.w3.org/2000/svg" className='nav-svg'  viewBox="0 -960 960 960"  >
                            <path d="M480-240q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-36-153h73q0-37 6.5-52.5T555-485q35-34 48.5-58t13.5-53q0-55-37.5-89.5T484-720q-51 0-88.5 27T343-620l65 27q9-28 28.5-43.5T482-652q28 0 46 16t18 42q0 23-15.5 41T496-518q-35 32-43.5 52.5T444-393Zm36 297q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                        </svg>
                        tobe decide
                    </a>
                </li>
                */}

            </ul>

        </nav>
    );
}
export default Nav;