import './Home.css';
import PageBackground from '../PageBackground/PageBackground.js';

const Home = () => {
    return (
        <div className="home-page">
            <PageBackground backgroundPath='./Assets/Images/road.jpg' />

            <div className="home-page-heading">
                Go Anywhere Your Heart Desires
            </div>
        </div>
    )
}

export default Home;