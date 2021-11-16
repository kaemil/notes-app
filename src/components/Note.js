import React, { useState } from 'react';
import noteColors from './noteColors';

function Note({ note, handleDelete, handleEdit, handleSave, maxLength }) {
	const [title, setTitle] = useState(note.title);
	const [text, setText] = useState(note.text);
	const handleChange = (e) => {
		if (maxLength - e.target.value.length >= 0) {
			e.target.name === 'title'
				? setTitle(e.target.value)
				: setText(e.target.value);
		}
	};
	return (
		<div className="note" style={{ backgroundColor: noteColors[note.color] }}>
			{note.editState ? (
				<>
					<div className="note__header">
						<div className="note__title">{note.title}</div>
						<button
							onClick={() => handleEdit(note.id)}
							className="note__editIcon"
							style={{ backgroundColor: noteColors[note.color] }}
						>
							<i className="icon-pencil"></i>
						</button>
					</div>
					<div className="note__text">{note.text}</div>
				</>
			) : (
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
						<textarea
							value={text}
							name="text"
							onChange={handleChange}
						></textarea>
						<div>{`${maxLength - text.length} remaining`}</div>
					</div>
				</>
			)}

			<div className="note__footer">
				<div className="note__date">
					{note.date.getDate()}-{note.date.getMonth() + 1}-
					{note.date.getFullYear()}
				</div>
				{/* <div className="note__remainingLetters"></div> */}
				<button
					onClick={() => handleDelete(note.id)}
					className="note__deleteIcon"
					style={{ backgroundColor: noteColors[note.color] }}
				>
					<i className="icon-trash"></i>
				</button>
			</div>
		</div>
	);
}

export default Note;
