import Nav from "./Nav";
import "../css/header.css"
function Header({ setToPage, setMessage }) {

    return (
        <header className="site-header">
            <div className="logo-container">
                <a href="../../index.html" className="logo-link">
                    <img src="/logo.jpg" alt="a logo cat illustration" className="logo-img" />
                </a>
            </div>
            <h1 className="header-title">Cats Power the Internet</h1>
            <Nav setToPage={setToPage} setMessage={setMessage} />

        </header>
    );
}
export default Header;