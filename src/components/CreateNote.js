import React from 'react';

function CreateNote({ title, text, color, handleChange, handleSubmit,maxLength}) {
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
					<div>{`${maxLength-text.length} remaining`}</div>
				</div>
				<div className="notes__form--buttons">
					<select name="color" value={color} onChange={handleChange}>
						<option value="yellow">Yellow</option>
						<option value="blue">Blue</option>
						<option value="green">Green</option>
						<option value="pink">Pink</option>
					</select>
					<button type="submit">Create</button>
				</div>
			</form>
		</div>
	);
}

export default CreateNote;
