import React from 'react';
import noteColors from './noteColors';

function CreateNote({
	title,
	text,
	color,
	handleChange,
	handleSubmit,
	maxLength,
}) {
	// Creating select options
	const options = Object.keys(noteColors).map((item) => (
		<option value={item}>{item}</option>
	));
	return (
		<div className="notes__form">
			<form onSubmit={handleSubmit}>
				<input
					placeholder="note title..."
					type="text"
					name="title"
					value={title}
					onChange={handleChange}
				></input>
				<div className="notes__form--text">
					<textarea
						placeholder="note text..."
						name="text"
						value={text}
						onChange={handleChange}
					></textarea>
					<div>{`${maxLength - text.length} remaining`}</div>
				</div>
				<div className="notes__form--buttons">
					<select name="color" value={color} onChange={handleChange}>
						{options}
					</select>
					<button type="submit">Create</button>
				</div>
			</form>
		</div>
	);
}

export default CreateNote;
