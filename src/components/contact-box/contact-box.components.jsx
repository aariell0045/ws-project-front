import "./contact-box.styls.css";
function ContactBox(props) {
	let { phoneNumber, contactProfile } = props;
	return (
		<div className='contact-container'>
			<div className='contact-firstname-box'>
				<span>{contactProfile.contactFirstName}</span>
			</div>
			<div className='contact-lastname-box'>
				<span>{contactProfile.contactLastName}</span>
			</div>
			<div className='contact-phone-box'>
				<span>{phoneNumber}</span>
			</div>
		</div>
	);
}

export default ContactBox;
