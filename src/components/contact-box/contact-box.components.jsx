import "./contact-box.styls.css";

function ContactBox() {
  return (
    <div className="contact-container">
      <div className="contact-firstname-box">
        <span>אריאל</span>
      </div>
      <div className="contact-lastname-box">
        <span>כהן</span>
      </div>
      <div className="contact-phone-box">
        <span>05441234567</span>
      </div>
    </div>
  );
}

export default ContactBox;
