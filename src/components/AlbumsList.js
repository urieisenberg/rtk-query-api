import { useFetchAlbumsQuery, useAddAlubmMutation } from '../store';
import { Skeleton } from './Skeleton';
import { ExpandablePanel } from './ExpandablePanel';
import { Button } from './Button';

export const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlubmMutation();

  let content;
  if (isLoading) content = <Skeleton times={3} />;
  else if (error) content = <div>Something went wrong</div>;
  else if (data.length === 0) content = <div>No albums found</div>;
  else
    content = data.map((album) => (
      <ExpandablePanel key={album.id} header={album.title}>
        list of photos
      </ExpandablePanel>
    ));

  const onAddAlbum = () => addAlbum(user);

  return (
    <>
      <div>
        Albums for {user.name}
        <Button onClick={onAddAlbum}>
          Add Album
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
};
