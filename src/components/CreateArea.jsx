import { useState } from "react";

export function CreateArea() {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setNote({ ...note, title: e.target.value });
  };

  const handleChangeContent = (e) => {
    setNote({ ...note, content: e.target.value });
  };

  return (
    <div>
      <form className="create-note">
        <input
          value={note.title}
          type="text"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
        />
        <p>
          <textarea
            value={note.content}
            name="content"
            placeholder="Take a note.."
            onChange={(e) => handleChangeContent(e)}
          ></textarea>
        </p>
        <button className="add-note" type="submit">
          <i class="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}
