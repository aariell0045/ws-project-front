import React from "react";

function TrashIcon(props) {
	const { disabled } = props;
	if (disabled) {
		return (
			<svg
				width='21'
				height='21'
				viewBox='0 0 21 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g style={{ mixBlendMode: "multiply" }}>
					<rect width='21' height='21' fill='white' />
					<path
						d='M8.75 13.125L8.75 10.5'
						stroke='black'
						stroke-opacity='0.2'
						stroke-linecap='round'
					/>
					<path
						d='M12.25 13.125L12.25 10.5'
						stroke='black'
						stroke-opacity='0.2'
						stroke-linecap='round'
					/>
					<path
						d='M2.625 6.125H18.375V6.125C17.7939 6.125 17.5033 6.125 17.264 6.18494C16.5482 6.36425 15.9892 6.92319 15.8099 7.63904C15.75 7.87832 15.75 8.16888 15.75 8.75V13.5C15.75 15.3856 15.75 16.3284 15.1642 16.9142C14.5784 17.5 13.6356 17.5 11.75 17.5H9.25C7.36438 17.5 6.42157 17.5 5.83579 16.9142C5.25 16.3284 5.25 15.3856 5.25 13.5V8.75C5.25 8.16888 5.25 7.87832 5.19006 7.63904C5.01075 6.92319 4.45181 6.36425 3.73596 6.18494C3.49668 6.125 3.20612 6.125 2.625 6.125V6.125Z'
						stroke='black'
						stroke-opacity='0.2'
						stroke-linecap='round'
					/>
					<path
						d='M8.80963 2.94927C8.90934 2.85624 9.12904 2.77404 9.43467 2.71541C9.74029 2.65678 10.1148 2.625 10.5 2.625C10.8852 2.625 11.2597 2.65678 11.5653 2.71541C11.871 2.77404 12.0907 2.85624 12.1904 2.94927'
						stroke='black'
						stroke-opacity='0.2'
						stroke-linecap='round'
					/>
				</g>
			</svg>
		);
	} else {
		return (
			<svg
				width='21'
				height='21'
				viewBox='0 0 21 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g style={{ mixBlendMode: "multiply" }}>
					<rect width='21' height='21' fill='white' />
					<path d='M8.75 13.125L8.75 10.5' stroke='black' stroke-linecap='round' />
					<path d='M12.25 13.125L12.25 10.5' stroke='black' stroke-linecap='round' />
					<path
						d='M2.625 6.125H18.375V6.125C17.7939 6.125 17.5033 6.125 17.264 6.18494C16.5482 6.36425 15.9892 6.92319 15.8099 7.63904C15.75 7.87832 15.75 8.16888 15.75 8.75V13.5C15.75 15.3856 15.75 16.3284 15.1642 16.9142C14.5784 17.5 13.6356 17.5 11.75 17.5H9.25C7.36438 17.5 6.42157 17.5 5.83579 16.9142C5.25 16.3284 5.25 15.3856 5.25 13.5V8.75C5.25 8.16888 5.25 7.87832 5.19006 7.63904C5.01075 6.92319 4.45181 6.36425 3.73596 6.18494C3.49668 6.125 3.20612 6.125 2.625 6.125V6.125Z'
						stroke='black'
						stroke-linecap='round'
					/>
					<path
						d='M8.80963 2.94927C8.90934 2.85624 9.12904 2.77404 9.43467 2.71541C9.74029 2.65678 10.1148 2.625 10.5 2.625C10.8852 2.625 11.2597 2.65678 11.5653 2.71541C11.871 2.77404 12.0907 2.85624 12.1904 2.94927'
						stroke='black'
						stroke-linecap='round'
					/>
				</g>
			</svg>
		);
	}
}

export default TrashIcon;
