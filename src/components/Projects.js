import React from 'react';
import Project from './Project';

class Projects extends React.Component {

	state = {
		projects: [
			{
				title: "Think It Over",
				description: "A whishlist app to reduce impulse buying",
				gitHref: 'https://github.com/kaelaclement/think-it-over',
				demoHref: 'https://drive.google.com/file/d/1Rg_W5CVZNZscSRDLU28Tqn1LxXXJo6iC/view?usp=sharing',
				features: ["Rails API", "PostgreSQL database managed with ActiveRecord", "React frontend"]
			},
			{
				title: "How To Veg",
				description: "A web app for peer reviewed vegetarian recipes",
				gitHref: 'https://github.com/kaelaclement/how-to-veg',
				demoHref: 'https://drive.google.com/file/d/1vqIiwzNgC5K5r67LHJqNUEDQOQLswjkI/view?usp=sharing',
				features: ["Built on Rails", "SQLite database managed with ActiveRecord", "OmniAuth provides Facebook authentication for login and signup"]
			}
		]
	}
	render() {

		const projects = this.state.projects.map((project, index) => {
			return <Project key={index} title={project.title} description={project.description} gitHref={project.gitHref} demoHref={project.demoHref} features={project.features} />
		})

		return (
			<div className='projects'>
				<h1>Projects</h1>
				<div className='projectsContainer'>
					{projects}
				</div>
				{/* <ul>
					<li><a target='_blank' rel='noopener noreferrer' href='https://github.com/kaelaclement/think-it-over'>Think It Over</a></li>
					<li><a target='_blank' rel='noopener noreferrer' href='https://github.com/kaelaclement/how-to-veg'>How To Veg</a></li>
				</ul> */}
			</div>
		)
	}
}

export default Projects;