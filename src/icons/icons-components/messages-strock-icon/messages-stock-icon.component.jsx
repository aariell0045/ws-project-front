function MessagesStockIcon(props) {
	const { path } = props;
	if (path === "/MessagesStock") {
		return (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 6.99993C20.9578 11.3731 17.9999 13.4999 20.4999 16.4999C12.9852 20.4405 3.91203 18.6389 3.99985 14.9999C4.08768 11.361 9.7449 7.95527 12.6087 8.8488C15.4726 9.74234 18.5 3.99991 19.5 6.99993Z'
					fill='#834CFD'
				/>
				<rect x='4' y='6' width='16' height='12' rx='2' stroke='black' />
				<path
					d='M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9'
					stroke='black'
				/>
			</svg>
		);
	} else {
		return (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 6.99993C20.9578 11.3731 17.9999 13.4999 20.4999 16.4999C12.9852 20.4405 3.91203 18.6389 3.99985 14.9999C4.08768 11.361 9.7449 7.95527 12.6087 8.8488C15.4726 9.74234 18.5 3.99991 19.5 6.99993Z'
					fill='white'
				/>
				<rect x='4' y='6' width='16' height='12' rx='2' stroke='black' />
				<path
					d='M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9'
					stroke='black'
				/>
			</svg>
		);
	}
}

export default MessagesStockIcon;
