import React from 'react';
import noteColors from './noteColors';

function NoteFooter({handleDelete,note}) {
	return (
		<>
			<div className="note__footer">
				<div className="note__date">{note.date}</div>
				<button
					onClick={() => handleDelete(note.id)}
					className="note__deleteIcon"
					style={{ backgroundColor: noteColors[note.color] }}
				>
					<i className="icon-trash"></i>
				</button>
			</div>
		</>
	);
}

export default NoteFooter
