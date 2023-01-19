import { Fragment } from 'react';
import { deleteUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import { GoTrashcan } from 'react-icons/go';
import { Button } from './Button';
import { ExpandablePanel } from './ExpandablePanel';
import { AlbumsList } from './AlbumsList';

export const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const onDeleteUser = () => doDeleteUser(user);

  const header = (
    <Fragment>
      <Button loading={isLoading} onClick={onDeleteUser} className="mr-2">
        <GoTrashcan />
      </Button>
      {error && <div> Something went wrong </div>}
      {user.name}
    </Fragment>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};
