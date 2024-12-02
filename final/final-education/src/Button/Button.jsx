import './button.css';
function Button({ disabled = false, className = '', type = 'button', visual = 'button', a11yLabel = '', a11yExpanded = '', a11yControl = '', onClick, children }) {

    let buttonClass = 'button';
    if (visual === 'link') {
        buttonClass = 'button-link';
    } else if (visual = 'button') {
        buttonClass = 'button-normal';
    }
    return (
        <button
            type={type}
            className={`${buttonClass} ${className}`}
            disabled={disabled}
            onClick={onClick}
            aria-label={a11yLabel}
            aria-expanded={a11yExpanded}
            aria-controls={a11yControl}
        >
            {children}
        </button>
    );
}
export default Button;