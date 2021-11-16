import React from 'react';
import Note from './Note';

function DisplayNote({ note, handleDelete, handleEdit, handleSave,maxLength }) {

   
	return (
		<div className="notes__display">
			{note.map((element) => (
				<Note
            maxLength={maxLength}
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
