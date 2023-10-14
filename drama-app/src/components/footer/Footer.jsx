
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";


import './Footer.css'
// import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Footer = () => {
    return (
        <footer className="footer">
            {/* <ContentWrapper className="container"> */}
               <div className="info-footer" style={{marginTop:'40px', color:'#fff',textAlign:'center'}}>
                    <span className="info-f">Privacy-Policy</span>
                    <span className="info-f">About</span>
                    <span className="info-f">Blog</span>
                    <span className="info-f">FAQ</span>
                </div>
              
                <div className="infoText" style={{marginTop:'40px', color:'#aaa',textAlign:'center'}}>
                    sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </div>
                <div className="socialIcons" style={{marginTop:'40px', color:'#fff',textAlign:'center'}}>
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div> 
            {/* </ContentWrapper> */}
        </footer>
    );
};

export default Footer;