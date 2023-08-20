import { useState } from "react";

export default function ContactForm() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
        const { error, success } = await res.json();
        if (error) {
            setError(error);
            setSuccess('');
        }
        if (success) {
            setSuccess(success);
            setError('');
        }
    }

    function validateEmail(email: string) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    const disabled: boolean = loading || !name || !email || !validateEmail(email) || !message;

    return (
        <form className="contact-form" method="post" action="#" onSubmit={handleSubmit}>
            {
                success ?
                    <div className="success">👋 Hi!  Thanks for reaching out.  I will get back to you ASAP.</div>
                    :
                    <>
                        <div className="form-group">
                            <label htmlFor="name">Name<sup className="required">*</sup></label >
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.currentTarget.value)}
                                disabled={loading}
                                required
                            />
                        </div >
                        <div className="form-group">
                            <label htmlFor="email">Email Address <sup className="required">*</sup></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                disabled={loading}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message <sup className="required">*</sup></label>
                            <textarea
                                name="message"
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                disabled={loading}
                                rows={5}
                                required
                            />
                        </div>

                        {
                            error && <div className="error">🥵 {error}</div>
                        }

                        <button
                            type="submit"
                            className={`submit-button ${disabled ? 'disabled' : ''}`}
                            disabled={disabled}
                        >
                            Say Hello!
                        </button>


                    </>
            }

        </form >
    )
}