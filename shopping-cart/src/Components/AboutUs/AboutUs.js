import './AboutUs.css';
import PageBackground from '../PageBackground/PageBackground.js';

const AboutUs = () => {
    return (
        <div className='about-us-page'>
            <PageBackground backgroundPath='./Assets/Images/worker.jpeg' />

            <div className='about-us-container'>
                <div className='about-us-slogan'>
                    We Lead, We Create
                </div>
                <div className='about-us-description'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium dolorem que lala laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo.
                </div>
            </div>
        </div>
    )
}

export default AboutUs;