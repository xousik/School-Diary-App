import React, { createContext, useContext, useState } from 'react';

const NotesContext = createContext();

const initialNotes = [
  {
    title: 'My first note',
    content: 'Hi everyone you really dont know how happy am I it is working.',
  },
  {
    title: 'Troubles with implementing this feature',
    content:
      'It was not really easy to implement this feature with adding notes, but I learn a lot and make a big step forward, hope it pays off in the future.',
  },
  {
    title: 'Little reminder to focus and keep going forward',
    content:
      'Just some words to myself: Listen, it is not always easy, most of the time it will be hard af and you will completly do not know what is going on and how to make it working but if you stay focused and keep going forward there is a beautifull future waiting for you! :)',
  },
];

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title: title,
        content: content,
      },
    ]);
    setTitle('');
    setContent('');
  };

  // console.log(notes);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  return (
    <NotesContext.Provider value={{ notes, title, content, handleSubmit, handleTitleChange, handleContentChange }}>{children}</NotesContext.Provider>
  );
};

export const useNote = () => {
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    throw Error('useNote needs to be used inside NotesContext');
  }

  return notesContext;
};
