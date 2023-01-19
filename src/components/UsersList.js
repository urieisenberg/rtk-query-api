import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import { Skeleton } from './Skeleton';
import { Button } from './Button';

export const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onAddUser = () => dispatch(addUser());

  if (isLoading) return <Skeleton times={7} className="h-10 w-full" />;

  if (error) return <div>{error.message}</div>;

  const renderedUsers = data.map((user) => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={onAddUser}>Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
};
