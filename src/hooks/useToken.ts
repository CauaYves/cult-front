import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function useToken() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useToken deve ser usado dentro de um UserProvider');
  }

  const { token } = context;

  return token;
}