import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <div className="footer-link"> Legal </div>
                <div className="footer-link"> Careers </div>
                <div className="footer-link"> Privacy </div>
                <div className="footer-link"> News </div>
            </div>
            <div className="footer-languages">
                <div className="footer-language"> English </div>
                <div className="separator"></div>
                <div className="footer-language"> French </div>
            </div>
        </div>
    );
}

export default Footer;