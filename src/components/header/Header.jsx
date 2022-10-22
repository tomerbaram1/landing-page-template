J
import { FaSignInAlt, FaUser } from "react-icons/fa";

import "./header.css"
const Header = () => {

  return (
    <header className="header">
      <div>
        {/* Link to Home page */}
        <span className="logo">LandingTemplate</span>
      </div>
      
      {/* Link to contact page or any other components you want */}
      
      <div>
        <>
          <div className="text-link">
            {/* Link to login page */}
            <FaSignInAlt /> Login
          </div>
          <div className="text-link">
              {/* Link to register page */}
            <FaUser /> Register
          </div>
        </>
      </div>
    </header>
  );
};

export default Header;
