import "./contact-profile.styles.css";

function ContactProfile(props) {
	const { contactFirstName, contactLastName, gender, email, birthDay, age } =
		props.contactProfile;

	function returnField(fieldName) {
		return (
			<div>
				<span>{fieldName}</span>
				<input type='text' />
			</div>
		);
	}
	return (
		<div className='contact-profile-canvas'>
			<header>
				<span>X</span>
				<p>פרופיל איש קשר</p>
			</header>
			<div className='contact-profile-content'>
				{contactFirstName && returnField("שם פרטי:")}
				{contactLastName && returnField("שם משפחה:")}
				{gender && returnField("מגדר:")}
				{email && returnField("מייל:")}
				{birthDay && returnField("שנת לידה")}
				{age && returnField("גיל")}
			</div>
		</div>
	);
}

export default ContactProfile;
