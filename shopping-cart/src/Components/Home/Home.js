import './Home.css';
import PageBackground from '../PageBackground/PageBackground';

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-page-heading">
                Go Anywhere Your Heart Desires
            </div>

            <PageBackground backgroundPath='./Assets/Images/road.jpg' />
        </div>
    )
}

export default Home;