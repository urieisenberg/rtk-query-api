import { useFetchAlbumsQuery, useAddAlubmMutation } from '../store';
import { Skeleton } from './Skeleton';
import { Button } from './Button';
import { AlbumListItem } from './AlbumListItem';

export const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, { isLoading: isAdding }] = useAddAlubmMutation();

  let content;
  if (isFetching) content = <Skeleton times={3} />;
  else if (error) content = <div>Something went wrong</div>;
  else if (data.length === 0) content = <div>No albums found</div>;
  else
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ));

  const onAddAlbum = () => addAlbum(user);

  return (
    <>
      <div className="flex flex-row m-2 justify-between items-center">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={onAddAlbum} loading={isAdding}>
          Add album
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
};
