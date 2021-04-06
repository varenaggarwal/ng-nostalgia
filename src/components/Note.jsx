export function Note({ title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
