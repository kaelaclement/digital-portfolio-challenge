import React from 'react';

const Contact = () => {
	return (
		<div className='contact'>
			<form>
				<input type='text' value='email' />
				<br />
				<textarea value='queries' />
				<br />
				<input type='button' value='submit' />
			</form>
		</div>
	)
}

export default Contact;