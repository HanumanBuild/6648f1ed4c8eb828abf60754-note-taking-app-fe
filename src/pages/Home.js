import React, { useState, useEffect } from 'react';
import api from '../api';
import NoteList from '../components/NoteList';

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get('/api/notes');
      setNotes(response.data);
    };

    fetchNotes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Notes</h1>
      <NoteList notes={notes} />
    </div>
  );
};

export default Home;