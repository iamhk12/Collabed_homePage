const Left = () => {
    return (
      <div>
        {/* Title */}
        <div className="contactTitle">
          <h2>Get in Touch</h2>
          <p>Please write the needed info for the user here</p>
        </div>
        {/* Contact info */}
        <div className="contactInfo">
          <div className="iconGroup">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="details">
              <span>Phone</span>
              <span>123456789</span>
            </div>
          </div>
          <div className="iconGroup">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="details">
              <span>Email</span>
              <span>ABC@Exapmle.com</span>
            </div>
          </div>
          <div className="iconGroup">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="details">
              <span>Location</span>
              <span>Building,Area,City,State</span>
            </div>
          </div>
        </div>
        {/* Social Media1 */}
        <div className="socialMedia">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    );
  };
  export default Left;
  
  
  