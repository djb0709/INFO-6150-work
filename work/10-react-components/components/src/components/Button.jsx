import '../css/button.css'

function Button({ disabled = false, className, type = "button", visual = "button", onClick, children }) {

    let buttonClass = "button";
    if (visual === "link") {
        buttonClass = "button-link";
    }

    return (
        <>
            <button
                type={type} className={`${buttonClass} ${className}`}
                disabled={disabled} onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}
export default Button;