import { Modal } from './Modal';
import { useAuth } from '../hooks/auth';

export function Card() {
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
