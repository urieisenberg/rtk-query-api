import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import { Skeleton } from './Skeleton';
import { Button } from './Button';

export const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap() // Unwrap the promise to get the actual data from the fulfilled action payload
      .catch((error) => setLoadingUsersError(error.message)) // Catch the error from the rejected action payload
      .finally(() => setIsLoadingUsers(false)); // This will run regardless of the promise being fulfilled or rejected
  }, [dispatch]);

  const onAddUser = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((error) => setCreatingUserError(error.message))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) return <Skeleton times={7} className="h-10 w-full" />;

  if (loadingUsersError) return <div>{loadingUsersError}</div>;

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
        {isCreatingUser ? (
          'Creating User ...'
        ) : (
          <Button onClick={onAddUser}>Add User</Button>
        )}
        {creatingUserError && <div>{creatingUserError}</div>}
      </div>
      {renderedUsers}
    </div>
  );
};
