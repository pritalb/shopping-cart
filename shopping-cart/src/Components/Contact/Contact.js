import './Contact.css';
import PageBackground from '../PageBackground/PageBackground.js';

const ContactPage = () => {
    return (
        <div className='contacts-page'>
            <PageBackground backgroundPath='./Assets/Images/logobg.png' />

            <div className='main-container'>
                <div className='heading'>
                    Contact Us
                </div>

                <div className='contacts-container'>
                    <div className='contact'>
                        <div className='contact-heading'> Feedback </div>
                        <div className='contact-description'> sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt </div>
                        <div className='contact-buttons-container'>
                            <button className='contact-button'> Lorem </button>
                            <button className='contact-button'> Ipsum </button>
                        </div>
                    </div>

                    <div className='contact'>
                        <div className='contact-heading'> Enquiry </div>
                        <div className='contact-description'> sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt </div>
                        <div className='contact-buttons-container'>
                            <button className='contact-button'> Lorem </button>
                            <button className='contact-button'> Ipsum </button>
                        </div>
                    </div>

                    <div className='contact'>
                        <div className='contact-heading'> Email </div>
                        <div className='contact-description'> sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt </div>
                        <div className='contact-email'>
                            Someemail@mail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;