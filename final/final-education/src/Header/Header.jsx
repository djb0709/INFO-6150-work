import Nav from "../Nav/Nav";
import './header.css';
function Header({ changePage, setTheme, theme }) {


    return (
        <>
            <header className="header">
                <div className="header-top">
                    <a href="/" className="img-link">
                        <img src="/logo.jpg" alt="" className="logo-img" />
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