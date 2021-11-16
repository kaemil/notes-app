import React from 'react';
import noteColors from './noteColors';
import NoteEdit from './NoteEdit';
import NoteSave from './NoteSave';
import NoteFooter from './NoteFooter';

function Note({ note, handleDelete, handleEdit, handleSave }) {
	return (
		<div className="note" style={{ backgroundColor: noteColors[note.color] }}>
			{note.editState ? (
				<NoteEdit note={note} handleSave={handleSave} />
			) : (
				<NoteSave note={note} handleEdit={handleEdit} />
			)}
			<NoteFooter handleDelete={handleDelete} note={note} />
		</div>
	);
}

export default Note;
