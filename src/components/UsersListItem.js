import { deleteUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import { GoTrashcan } from 'react-icons/go';
import { Button } from './Button';

export const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const onDeleteUser = () => doDeleteUser(user);

  return (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button loading={isLoading} onClick={onDeleteUser} className="mr-2">
            <GoTrashcan />
          </Button>
          {error && <div> Something went wrong </div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};
