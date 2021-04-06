import { useState } from "react";
import uuid from "react-uuid";

export function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ id: uuid(), title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const submitButton = (event) => {
    onAdd(note);
    setNote({ id: uuid(), title: "", content: "" });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            value={note.title}
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            name="content"
            placeholder="Take a note.."
            onChange={handleChange}
            onClick={() => setIsExpanded(true)}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={submitButton} className="add-note">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}
