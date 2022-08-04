import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface UserResponse {
  id: number;
  name: string;
  age: number;
}

const ReactQueryUserList = () => {
  const getUsers = (): Promise<UserResponse[]> =>
    axios.get('http://localhost:4000/users').then(res => res.data);

  const { data, isLoading, error } = useQuery(['users'], getUsers);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error ❗❗</div>;

  return (
    <>
      <h1>With React Query</h1>
      <h2>UserList</h2>
      <ul className='user-list'>
        {data?.map(user => (
          <li key={user.id} className='user-item'>
            <div>name: {user.name}</div>
            <div>age: {user.age}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReactQueryUserList;
