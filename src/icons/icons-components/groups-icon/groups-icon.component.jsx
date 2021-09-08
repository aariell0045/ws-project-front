function GroupsIcon(props) {
	const { path } = props;
	if (path === "/Groups") {
		return (
			<svg
				width='21'
				height='20'
				viewBox='0 0 21 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M17.5 13C15.7272 17.202 10.4981 17.5175 8.5 16.5C1.15153 12.2574 3.87814 5.37178 7 3.5C10.1219 1.62822 16.2237 3.10219 17.0002 5.99996C17.7766 8.89774 19.716 7.74744 17.5 13Z'
					fill='#834CFD'
				/>
				<circle
					cx='4.32224'
					cy='8.57986'
					r='2.57048'
					transform='rotate(39.4962 4.32224 8.57986)'
					stroke='black'
				/>
				<circle
					cx='13.4128'
					cy='15.6748'
					r='2.57048'
					transform='rotate(39.4962 13.4128 15.6748)'
					stroke='black'
				/>
				<circle
					cx='14.812'
					cy='4.32229'
					r='2.57048'
					transform='rotate(39.4962 14.812 4.32229)'
					stroke='black'
				/>
				<line x1='6.7947' y1='7.31939' x2='12.0584' y2='4.68755' stroke='black' />
				<line x1='15.409' y1='6.96011' x2='14.5318' y2='13.1011' stroke='black' />
			</svg>
		);
	} else {
		return (
			<svg
				width='21'
				height='20'
				viewBox='0 0 21 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M17.5 13C15.7272 17.202 10.4981 17.5175 8.5 16.5C1.15153 12.2574 3.87814 5.37178 7 3.5C10.1219 1.62822 16.2237 3.10219 17.0002 5.99996C17.7766 8.89774 19.716 7.74744 17.5 13Z'
					fill='white'
				/>
				<circle
					cx='4.32224'
					cy='8.57986'
					r='2.57048'
					transform='rotate(39.4962 4.32224 8.57986)'
					stroke='black'
				/>
				<circle
					cx='13.4128'
					cy='15.6748'
					r='2.57048'
					transform='rotate(39.4962 13.4128 15.6748)'
					stroke='black'
				/>
				<circle
					cx='14.812'
					cy='4.32229'
					r='2.57048'
					transform='rotate(39.4962 14.812 4.32229)'
					stroke='black'
				/>
				<line x1='6.7947' y1='7.31939' x2='12.0584' y2='4.68755' stroke='black' />
				<line x1='15.409' y1='6.96011' x2='14.5318' y2='13.1011' stroke='black' />
			</svg>
		);
	}
}

export default GroupsIcon;
