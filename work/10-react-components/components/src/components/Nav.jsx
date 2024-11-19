
import Button from './Button.jsx'
function Nav({ setToPage, setMessage }) {

    return (
        <nav className="header-nav">
            <Button className="header-link" type='button' visual="link" onClick={() => { setToPage("content"), setMessage("nav btn clicked to content") }}>
                content
            </Button>
            <Button className="header-link" type='button' visual="link" onClick={() => { setToPage("card"), setMessage("nav btn clicked to card") }}>
                card
            </Button>
            <Button className="header-link" type='button' visual="link" onClick={() => { setToPage("panels"), setMessage("nav btn clicked to panels") }}>
                panels
            </Button>

        </nav>
    );
}
export default Nav;