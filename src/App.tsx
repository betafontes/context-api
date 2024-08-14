import './App.css';
import { Card } from './components/Card';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Card />
      </AuthProvider>
    </>
  );
}

export default App;
