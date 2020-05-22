import React from 'react';
import Experience from './Experience';

class Employment extends React.Component {

	state = {
		experience: [],
		skills: []
	}

	handleExperienceMouseOver = () => {
		this.setState({
			experience: [
				{ title: "Apprentice DevOps Engineer", responsibilities: ["Idk yet", "not exactly", "there will be plenty", "just learning for now"] },
				{ title: "Personal Assistant", responsibilities: ["did stuff", "this is also a test"] }
			]
		})
	}

	handleSkillsMouseOver = () => {
		this.setState({
			skills: [
				"React, I guess",
				"Ruby",
				"JS is ok"
			]
		})
	}

	render() {
		const experience = this.state.experience.map((experience, index) => {
			return <Experience key={index} title={experience.title} responsibilities={experience.responsibilities} />
		})

		const skills = this.state.skills.map((skill, index) => {
			return <li key={index}>{skill}</li>
		})

		return (
			<div className='employment'>
				<div className='experience'>
					<h1 onMouseOver={this.handleExperienceMouseOver}>Experience</h1>
					{experience}
				</div>
				<div className='skills'>
					<h1 onMouseOver={this.handleSkillsMouseOver}>Skills</h1>
					<ul>
						{skills}
					</ul>
				</div>
				{/* <ul>
					<li>Apprentice DevOps Engineer</li>
					<li>Knowledge of...</li>
					<li>React</li>
					<li>Ruby on Rails</li>
					<li>SQL</li>
					<li>PostgreSQL</li>
					<li>HTML and CSS</li>
					<li>About to learn MongoDB</li>
					<li>Node</li>
				</ul> */}
			</div>
		)
	}
}

export default Employment;