import { useDeleteAlbumMutation } from '../store';
import { GoTrashcan } from 'react-icons/go';
import { Button } from './Button';
import { ExpandablePanel } from './ExpandablePanel';
import { PhotoList } from './PhotoList';

export const AlbumListItem = ({ album }) => {
  const [deleteAlbum, { isLoading: isDeleting }] = useDeleteAlbumMutation();

  const onDelete = () => deleteAlbum(album);

  const header = (
    <>
      <Button onClick={onDelete} loading={isDeleting} className="mr-2">
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
};
