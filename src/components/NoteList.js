import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = ({ notes }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {notes.map((note) => (
        <div key={note._id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold">{note.title}</h2>
          <p>{note.content}</p>
          <div className="flex justify-end space-x-2">
            <Link to={`/edit/${note._id}`} className="text-blue-500 hover:text-blue-700">
              Edit
            </Link>
            <Link to={`/delete/${note._id}`} className="text-red-500 hover:text-red-700">
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;