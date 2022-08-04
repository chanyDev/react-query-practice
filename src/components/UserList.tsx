import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface UserResponse {
  id: number;
  name: string;
  age: number;
}

const UserList = () => {
  const [userList, setUserList] = useState<UserResponse[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setIsLoading(true);

    const getUsers = async () => {
      try {
        const { data }: AxiosResponse<UserResponse[]> = await axios.get(
          'http://localhost:4000/users'
        );

        setUserList(data);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
          setIsLoading(false);
        }
      }
    };

    getUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error ❗❗</div>;

  return (
    <>
      <h1>Without React Query</h1>
      <h2>UserList</h2>
      <ul className='user-list'>
        {userList?.map(user => (
          <li key={user.id} className='user-item'>
            <div>name: {user.name}</div>
            <div>age: {user.age}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
