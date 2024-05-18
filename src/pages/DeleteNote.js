import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../api';

const DeleteNote = () => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const deleteNote = async () => {
      await api.delete(`/api/notes/${id}`);
      history.push('/');
    };

    deleteNote();
  }, [id, history]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Deleting Note...</h1>
    </div>
  );
};

export default DeleteNote;