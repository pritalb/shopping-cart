import './PageBackground.css';

const PageBackground = ({ backgroundPath }) => {
    return (
        <div className='page-background-container'>
            <div className='page-background-filter'></div>
            <img src={backgroundPath} className='page-background'/>
        </div>
    )
}

export default PageBackground;