import { useContext } from 'react';
import { Modal } from './Modal';
import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/auth';

interface IProps {
  text: string;
}

export function Card() {
  // const { signIn } = useContext(AuthContext);
  const { signIn } = useAuth();
  const submit = () => {
    signIn();
  };

  return (
    <div>
      <h1>Card</h1>
      <button onClick={submit}>Entrar</button>
      <Modal />
    </div>
  );
}
