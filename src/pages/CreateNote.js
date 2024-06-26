import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';
import NoteForm from '../components/NoteForm';

const CreateNote = () => {
  const history = useHistory();

  const handleCreateNote = async (note) => {
    await api.post('/api/notes', note);
    history.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Create Note</h1>
      <NoteForm onSubmit={handleCreateNote} />
    </div>
  );
};

export default CreateNote;