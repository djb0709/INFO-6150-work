import Nav from "../Nav/Nav";
import './header.css';
function Header({ changePage }) {


    return (
        <>
            <header className="header">
                <a href="#main" className='skip-link'>SKip to main</a>
                <div className="header-top">
                    <a href="/" className="img-link" aria-label="logo">
                        <img src="/logo.jpg" alt="a woman in growing graduation" className="logo-img" />
                    </a>
                    <h1 className="header-title">Welcome To Edu's World !</h1>

                </div>

                <Nav changePage={changePage}>

                </Nav>
            </header>

        </>
    );
}

export default Header;