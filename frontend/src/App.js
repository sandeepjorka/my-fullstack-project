import React from 'react';
import Users from './Users';
import AddUser from './AddUser';

function App() {
  return (
    <div className="App">
      <h1>🚀 Supabase Users App</h1>
      <AddUser />
      <hr />
      <Users />
    </div>
  );
}

export default App;
