import { useState } from "react";
import { CreateArea } from "./components/CreateArea";
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import { Footer } from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevValue) => {
      return prevValue.filter((note) => note.id !== id);
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={() => deleteNote(note.id)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
