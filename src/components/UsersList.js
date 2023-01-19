import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useThunk } from '../hooks/useThunk';
import { fetchUsers, addUser } from '../store';
import { Skeleton } from './Skeleton';
import { Button } from './Button';
import { UsersListItem } from './UsersListItem';

export const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const onAddUser = () => doAddUser();

  let content;
  if (isLoadingUsers) content = <Skeleton times={7} className="h-10 w-full" />;

  if (loadingUsersError) content = <div>Something went wrong</div>;
  else
    content = data.map((user) => <UsersListItem key={user.id} user={user} />);

  return (
    <div>
      <div className="flex flex-row justify-between item-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={onAddUser}>
          Add User
        </Button>
        {creatingUserError && <div>{creatingUserError}</div>}
      </div>
      {content}
    </div>
  );
};
