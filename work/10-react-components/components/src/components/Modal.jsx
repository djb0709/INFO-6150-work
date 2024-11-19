import Button from "./Button";
import { useRef } from "react";
import '../css/modal.css';
function Modal({ setMessage }) {
    const modalRef = useRef();


    const handleSumbit = (e) => {
        e.preventDefault();
        setMessage("Form submit");
    };
    const handleOpen = () => {
        modalRef.current.showModal();
        setMessage("modal open");
    };
    const handleClose = () => {
        modalRef.current.close();
        setMessage("modal close");
    };
    return (
        <>
            <Button className="open-btn" type="button" visual="button" onClick={handleOpen}>
                Open Modal
            </Button>
            <dialog ref={modalRef} className="modal">
                <h2 className="modal-title">Modal</h2>
                <form onSubmit={handleSumbit} className="modal-form">
                    <Button className="submit-btn" type="submit" visual="link">Submit</Button>
                </form>

                <Button className="close-btn" type="button" visual="button" onClick={handleClose}>Close</Button>
            </dialog>
        </>

    );
}
export default Modal;