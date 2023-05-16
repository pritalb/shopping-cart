import './Home.css';
import PageBackground from '../PageBackground/PageBackground.js';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <PageBackground backgroundPath='./Assets/Images/road.jpg' />
            <Footer />

            <div className="home-page-heading">
                Go Anywhere Your Heart Desires
            </div>
        </div>
    )
}

export default Home;