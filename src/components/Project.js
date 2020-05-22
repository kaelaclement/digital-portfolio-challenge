import React from 'react';

const Project = props => {
	return (
		<div className='project'>
			<p><span className='projectTitle'>{props.title}</span>
				<span className='projectLinks'>
					<a target='_blank' rel='noopener noreferrer' href={props.gitHref}>github</a>
					<a target='_blank' rel='noopener noreferrer' href={props.demoHref}>demo</a>
				</span></p>
			<h4>{props.description}</h4>
			<ul>
				{props.features.map((feature, index) => <li key={index}>{feature}</li>)}
			</ul>
		</div>
	)
}

export default Project;