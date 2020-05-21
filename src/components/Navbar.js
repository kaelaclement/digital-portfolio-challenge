import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav'>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/employment'>Employment</Link></li>
				<li><Link to='/projects'>Projects</Link></li>
				<li><a href='https://github.com/kaelaclement' target='_blank' rel='noopener noreferrer'>Github</a></li>
				<li><a href='https://www.linkedin.com/in/kaela-clement/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
				<li><a href='http://kaelaclement.com' target='_blank' rel='noopener noreferrer'>Blog</a></li>
				<li><a href='mailto:kaela.s.clement@gmail.com'>Email</a></li>
			</ul>
		</div>
	)
}

export default Navbar;