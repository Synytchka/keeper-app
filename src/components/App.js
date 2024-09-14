import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteTitle, noteContent) {
    setNotes((prevNotes) => [
      ...prevNotes,
      { title: noteTitle, content: noteContent },
    ]);
    event.preventDefault();
  }

  function deleteNote(deleteId) {
    setNotes((prevNotes) =>
      prevNotes.filter((note, index) => index != deleteId)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
