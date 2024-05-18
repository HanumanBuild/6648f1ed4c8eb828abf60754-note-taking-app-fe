import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../api';
import NoteForm from '../components/NoteForm';

const EditNote = () => {
  const { id } = useParams();
  const history = useHistory();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const response = await api.get(`/api/notes/${id}`);
      setNote(response.data);
    };

    fetchNote();
  }, [id]);

  const handleUpdateNote = async (updatedNote) => {
    await api.put(`/api/notes/${id}`, updatedNote);
    history.push('/');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Edit Note</h1>
      {note && <NoteForm onSubmit={handleUpdateNote} initialData={note} />}
    </div>
  );
};

export default EditNote;