import React, { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('Sending...');

    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/send-welcome`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    const result = await res.json();
    if (res.ok) {
      setMsg(result.message);
      setName('');
      setEmail('');
    } else {
      setMsg(`Error: ${result.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>➕ Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      /><br />
      <button type="submit">Send Welcome</button>
      <p>{msg}</p>
    </form>
  );
};

export default AddUser;

