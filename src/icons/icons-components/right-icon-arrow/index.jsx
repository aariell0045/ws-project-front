import * as React from "react";

function RightArrowIcon(props) {
	return (
		<svg
			width={9}
			height={13}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M8.395 6.692l-6.708 5.59a.8.8 0 01-1.312-.615V1.333A.8.8 0 011.687.718l6.708 5.59c.12.1.12.284 0 .384z"
				fill="#fff"
			/>
		</svg>
	);
}

export default RightArrowIcon;
