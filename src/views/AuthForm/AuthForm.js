import React from 'react';

export default function Auth({
  errorMessage,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="error-message">{errorMessage}</div>
      <div className="email">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="password">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" />
    </form>
  );
}
