import "./styles.css";
import logo from "../../assets/udemy-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="top-section">
          <div className="logo-p">
            <img src={logo} alt="udemy logo" width="40%" />
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              tristique placerat eleifend aliquam pellentesque facilisis
              ultrices. Imperdiet mus urna egestas at tellus.
            </p>
          </div>
          <div className="links">
            <div>
              <h4>About</h4>
              <Link to="/about/us" className="small">
                About us
              </Link>
              <Link to="/about/us" className="small">
                Courses
              </Link>
              <Link to="/about/us" className="small">
                Mentor
              </Link>
              <Link to="/about/us" className="small">
                Contact Us
              </Link>
            </div>
            <div>
              <h4>Support</h4>
              <Link to="/about/us" className="small">
                Careers
              </Link>
              <Link to="/about/us" className="small">
                Help & Support
              </Link>
              <Link to="/about/us" className="small">
                Blog
              </Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/about/us" className="small">
                Privacy Policy
              </Link>
              <Link to="/about/us" className="small">
                Terms of Service
              </Link>
              <Link to="/about/us" className="small">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
        <div className="down-section">
          <div>
            <a href="/" className="small">
              Privacy Policy
            </a>
            <a href="/" className="small">
              Terms and Condition
            </a>
          </div>
          <div>
            <a href="/" className="small">
              @2020 TanahAir Studio. All rights reserved.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
