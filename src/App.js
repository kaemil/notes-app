import React, { useState } from 'react';
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
	const editState = true;
	const maxLength = 200;

	const handleChange = (e) => {
		if (maxLength - e.target.value.length >= 0) {
			e.target.name === 'title'
				? setTitle(e.target.value)
				: e.target.name === 'text'
				? setText(e.target.value)
				: setColor(e.target.value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setNote([
			...note,
			{
				id: shortid.generate(),
				title,
				text,
				color,
				editState,
				date: new Date(),
			},
		]);
		setTitle('');
		setText('');
		setColor('yellow');
	};
	const handleDelete = (id) => {
		setNote([...note.filter((item) => item.id !== id)]);
	};
	const handleSave = (id, title, text, editState) => {
		setNote([
			...note.map((item) =>
				item.id === id ? { ...item, title, text, editState: !editState } : item,
			),
		]);
	};
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
				handleDelete={handleDelete}
				handleEdit={handleEdit}
				handleSave={handleSave}
				editState={editState}
			/>
		</div>
	);
}

export default App;
