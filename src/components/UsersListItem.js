import { deleteUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import { GoTrashcan } from 'react-icons/go';
import { Button } from './Button';

export const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const onDeleteUser = () => doDeleteUser(user);

  return (
    <>
      <Button loading={isLoading} onClick={onDeleteUser} className="mr-2">
        <GoTrashcan />
      </Button>
      {error && <div> Something went wrong </div>}
      {user.name}
    </>
  );
};
