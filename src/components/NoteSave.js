import React from 'react';
import noteColors from './noteColors';

function NoteSave({note,handleEdit}) {
	return (
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
	);
}

export default NoteSave
