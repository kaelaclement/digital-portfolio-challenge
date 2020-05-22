import React from 'react';

const Experience = props => {
	return (
		<div>
			<h3>{props.title}</h3>
			<ul>
				{props.responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
			</ul>
		</div>
	)
}

export default Experience;