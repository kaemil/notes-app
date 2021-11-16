import React, { useState, useEffect } from 'react';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DisplayNote';
import shortid from 'shortid';
import './css/style.css';
import './css/fontello/css/fontello.css';

function App() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [color, setColor] = useState('yellow');
	const [note, setNote] = useState([]);
	const editState = false;
	const maxLength = 300;

   // Setting and getting local storage
	useEffect(() => {
		const stored = JSON.parse(localStorage.getItem('notes'));
		setNote(stored);
	}, []);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(note));
	}, [note]);


   // Control form 
	const handleChange = (e) => {
		if (maxLength - e.target.value.length >= 0) {
			e.target.name === 'title'
				? setTitle(e.target.value)
				: e.target.name === 'text'
				? setText(e.target.value)
				: setColor(e.target.value);
		}
	};

   //Creating note and inserting to note array
	const handleSubmit = (e) => {
		e.preventDefault();
		const date = new Date();
		setNote([
			...note,
			{
				id: shortid.generate(),
				title,
				text,
				color,
				editState,
				date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
			},
		]);
		setTitle('');
		setText('');
		setColor('yellow');
	};

   // Deleting note
	const handleDelete = (id) => {
		setNote([...note.filter((item) => item.id !== id)]);
	};

   // Saving note after editing
	const handleSave = (id, title, text, editState) => {
		setNote([
			...note.map((item) =>
				item.id === id ? { ...item, title, text, editState: !editState } : item,
			),
		]);
	};
   
   // Displaying edit form after button click
	const handleEdit = (id) => {
		setNote([
			...note.map((item) =>
				item.id === id ? { ...item, editState: !item.editState } : item,
			),
		]);
	};

	return (
		<div className="notes">
			<header>Notes</header>
			<CreateNote
				handleChange={handleChange}
				maxLength={maxLength}
				title={title}
				color={color}
				text={text}
				handleSubmit={handleSubmit}
			/>
			<DisplayNote
				note={note}
				maxLength={maxLength}
				handleDelete={handleDelete}
				handleEdit={handleEdit}
				handleSave={handleSave}
				editState={editState}
			/>
		</div>
	);
}

export default App;
