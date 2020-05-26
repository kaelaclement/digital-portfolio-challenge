import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav'>
			<ul>
				<li><Link to='/'>home</Link></li>
				<li><Link to='/about'>about</Link></li>
				<li><Link to='/cv'>cv</Link></li>
				<li><Link to='/projects'>projects</Link></li>
				<li><a href='https://github.com/kaelaclement' target='_blank' rel='noopener noreferrer'>github</a></li>
				<li><a href='https://www.linkedin.com/in/kaela-clement/' target='_blank' rel='noopener noreferrer'>linkedin</a></li>
				<li><a href='http://kaelaclement.com' target='_blank' rel='noopener noreferrer'>blog</a></li>
				<li><a href='mailto:kaela.s.clement@gmail.com'>email</a></li>
			</ul>
		</div>
	)
}

export default Navbar;