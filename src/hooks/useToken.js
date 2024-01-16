import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function useToken() {
  const { token } = useContext(UserContext);

  return token;
}
