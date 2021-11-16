import React from 'react';
import Note from './Note';

function DisplayNote({ note, handleDelete, handleEdit, handleSave }) {

   
	return (
		<div className="notes__display">
			{note.map((element) => (
				<Note
					key={element.id}
					handleDelete={handleDelete}
					note={element}
					handleEdit={handleEdit}
               handleSave={handleSave}
				/>
			))}
		</div>
	);
}

export default DisplayNote;
