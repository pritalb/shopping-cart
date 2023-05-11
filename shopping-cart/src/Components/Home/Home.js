import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-page-heading">
                Go Anywhere Your Heart Desires
            </div>

            <div className='page-background-container'>
                <div className='page-background-filter'></div>
                <img src='./Assets/Images/road.jpg' className='page-background'/>
            </div>
        </div>
    )
}

export default Home;