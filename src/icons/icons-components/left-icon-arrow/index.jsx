import * as React from "react";

function LeftArrowIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={33}
			height={33}
			fill="none"
			{...props}
		>
			<path
				d="M12.605 16.308l6.708-5.59a.8.8 0 011.312.615v10.334a.8.8 0 01-1.312.614l-6.707-5.589a.25.25 0 010-.384z"
				fill="#fff"
			/>
		</svg>
	);
}

export default LeftArrowIcon;
