import "./contact-box.styls.css";

function ContactBox(props) {

   let [firstColumn,secondColumn,thirdColumn]=props.item;
  return (
    <div className="contact-container">
      <div className="contact-firstname-box">
        <span>{firstColumn}</span>
      </div>
      <div className="contact-lastname-box">
        <span>{secondColumn}</span>
      </div>
      <div className="contact-phone-box">
        <span>{thirdColumn}</span>
      </div>
    </div>
  );
}

export default ContactBox;
