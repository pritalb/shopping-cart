import './Home.css';
import PageBackground from '../PageBackground/PageBackground.js';
import Navbar from '../Navbar/Navbar.js';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />

            <div className="home-page-heading">
                Go Anywhere Your Heart Desires
            </div>

            <PageBackground backgroundPath='./Assets/Images/road.jpg' />
        </div>
    )
}

export default Home;