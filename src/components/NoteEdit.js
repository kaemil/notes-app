import React, { useState } from 'react';
import noteColors from './noteColors';

function NoteEdit({ note, handleSave }) {
	const [title, setTitle] = useState(note.title);
	const [text, setText] = useState(note.text);
	const handleChange = (e) => {
		e.target.name === 'title'
			? setTitle(e.target.value)
			: setText(e.target.value);
	};
	return (
		<>
			<div className="note__header">
				<div className="note__title--edit">
					<input value={title} name="title" onChange={handleChange}></input>
				</div>
				<button
					onClick={() => handleSave(note.id, title, text, note.editState)}
					className="note__editIcon"
					style={{ backgroundColor: noteColors[note.color] }}
				>
					<i className="icon-ok"></i>
				</button>
			</div>
			<div className="note__text--edit">
				<textarea value={text} name="text" onChange={handleChange}></textarea>
			</div>
		</>
	);
}

export default NoteEdit;
