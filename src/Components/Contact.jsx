import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zoews0h', 'template_ewurk98', form.current, 'YwJvCIvl0Vyr5YVr0')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        
        <form ref={form} onSubmit={sendEmail}>
            <h3>Contact Me</h3>
            <p>Feel free to write me any feedback, ideas, to have a coffee or even a job offer!</p>
            <label className="form-group">
                <input type="text" name="user_name" className="form-control"  required/>
                <span>Your Name</span>
            </label>
            <label className="form-group">
                <input type="email" name="user_email" className="form-control"  required/>
                <span>Your Mail</span>
            </label>
            <label className="form-group" >
                <textarea name="message" className="form-control" required></textarea>
                <span>Your Message</span>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Contact