import { useDeleteAlbumMutation } from '../store';
import { GoTrashcan } from 'react-icons/go';
import { Button } from './Button';
import { ExpandablePanel } from './ExpandablePanel';

export const AlbumListItem = ({ album }) => {
  const [deleteAlbum, { isLoading: isDeleting }] = useDeleteAlbumMutation();

  const header = (
    <div>
      <Button>
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      list of photos
    </ExpandablePanel>
  );
};
