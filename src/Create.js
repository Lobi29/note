import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [subject, setSubject] = useState('Theory of Computation');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, body, subject };

    fetch('http://localhost:8000/notes/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note)
    }).then(() => {
      // history.go(-1);
      history('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New note</h2>
      <form onSubmit={handleSubmit}>
        <label>note title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>note body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>note subjectr:</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="Theory of Computation">Theory of Computation</option>
          <option value="Algorithm">Algorithm</option>
          <option value="Signals and data Communication">Signals and data Communication</option>
          <option value="Computer Architecture and Organisation">Computer Architecture and Organisation</option>
        </select>
        <button>Add note</button>
      </form>
    </div>
  );
}
 
export default Create;