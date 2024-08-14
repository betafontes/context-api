import { useAuth } from '../hooks/auth';

export function Description() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Description: {JSON.stringify(user)}</h1>
    </div>
  );
}
