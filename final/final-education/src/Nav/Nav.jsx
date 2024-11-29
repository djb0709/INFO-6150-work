import './nav.css'
function Nav({ changePage }) {

    return (
        <nav className="header-nav">

            <ul className="nav-menu">

                <li className='menu-item'>

                    <a onClick={changePage} href="/">Homepage</a>
                </li>

                <li className='menu-item'>

                    <a onClick={changePage} href="/courses">Courses</a>
                </li >

                <li className='menu-item'>

                    <a onClick={changePage} href="/about">About</a>
                </li>
            </ul>
            <span className="switch-theme">
                <label htmlFor="mode-switcher">Theme Switch</label>
                <select id="mode-switcher">
                    <option value="auto">Auto</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </span>
        </nav>
    );
}
export default Nav;