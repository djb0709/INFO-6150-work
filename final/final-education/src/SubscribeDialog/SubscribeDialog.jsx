import React, { useRef, useState } from 'react';
import './subscribe.css';

function SubscribeDialog({ id, open, onClose, onSubmit, isSubscribe, setIsSubscribe }) {
    const dialogRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [preference, setPreference] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState({});


    const handleClose = () => {
        onClose();
        setName('');
        setEmail('');
        setPreference('');
        setIsChecked(false);
        setError({});
    };
    const handleIsSubscribe = () => {
        setIsSubscribe(!isSubscribe);
    }
    const validate = () => {
        const newErrors = {};
        if (name === null || name === "") {
            newErrors.name = 'Name is required.';
        }

        if (email === null || email === "") {
            newErrors.email = 'Email is required.';

        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email format.';

        }
        if (preference === null || preference === "") {
            newErrors.preference = 'Preference is required.';
        }
        if (isSubscribe && !isChecked) {
            newErrors.isChecked = 'You must confirm to unsubscribe.';
        }
        setError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            return true;
        } else {
            return false;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();



        if (!validate()) {
            return;
        }


        onSubmit({ name, email, preference, isChecked });


        handleIsSubscribe();
        handleClose();
    };



    if (open) {
        dialogRef.current?.showModal();
    } else {
        dialogRef.current?.close();
    }

    return (
        <dialog ref={dialogRef} className="subscribe-dialog" >
            <button className="close-btn" onClick={handleClose}>X</button>
            <h3 className='dialog-title'>{isSubscribe ? 'Unsubscribe from the Course' : 'Subscribe to the Course'}</h3>
            <form onSubmit={handleSubmit} method='post' className='subscribe-form'>
                <h4>All the * field is required</h4>
                <label htmlFor={`name${id}`} className='subscribe-label' >
                    Name*:

                </label>
                {error.name && <span className='error-message'>{error.name}</span>}
                <input
                    id={`name${id}`}
                    type="text"
                    value={name}
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                    className='subscribe-field'
                />
                <label htmlFor={`email${id}`} className='subscribe-label'>
                    Email*:

                </label>
                {error.email && <span className='error-message'>{error.email}</span>}
                <input
                    id={`email${id}`}
                    type="text"
                    value={email}
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className='subscribe-field'
                />
                <label htmlFor={`preference${id}`} className='subscribe-label'>
                    Preference*:

                </label>
                {error.preference && <span className='error-message'>{error.preference}</span>}
                <select
                    id={`preference${id}`}
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    className='subscribe-field'
                >
                    <option value="">Select...</option>
                    <option value="weekly">{!isSubscribe ? "Weekly Updates" : "Pause for a week"}</option>
                    <option value="monthly">{!isSubscribe ? "Monthly Updates" : "Pause for a month"}</option>
                </select>
                {!isSubscribe ? "" :
                    <div className='checkbox-unsubscribe'>
                        <input type="checkbox" name="wants-unsubscribe" id={`confirm-unsubscribe${id}`} className='subscribe-field' />
                        <label htmlFor={`confirm-unsubscribe${id}`} className='subscribe-label'>
                            Do you want to unsubscribe from the excellent course?

                        </label>
                        {error.isChecked && <span className="error-message">{error.isChecked}</span>}
                    </div>
                }
                <button type="submit" className='form-submit'>{!isSubscribe ? "Subscribe" : "Unsubscribe"} </button>
            </form>
        </dialog>
    );
}

export default SubscribeDialog;