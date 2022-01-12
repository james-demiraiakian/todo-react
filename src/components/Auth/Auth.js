import React, { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import classNames from 'classnames';
import AuthForm from '../../views/AuthForm/AuthForm';

export default function Auth({ setCurrentUser }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('signIn');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        action === 'signIn' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <div>
      <div className="buttons">
        <h3
          onClick={() => {
            setAction('signIn');
          }}
          className={classNames({ active: action === 'signIn' })}
        >
          Sign In
        </h3>
        <h3
          onClick={() => {
            setAction('signUp');
          }}
          className={classNames({ active: action === 'signUp' })}
        >
          Sign Up
        </h3>
      </div>
      <div>Action: {action}</div>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
